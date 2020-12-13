import styled, { keyframes } from 'styled-components';
import { bounceIn, bounceInLeft } from 'react-animations';
import heroImg from '../../../Assets/Images/hero.svg';
import heroDarkImg from '../../../Assets/Images/hero_dark.svg';

interface IContent{
    hasViewModal: boolean;
}

export const Content = styled.div<IContent>`
    display: flex;
    justify-content:center;
    transition: .25s;
    align-items:center;
    flex-direction: column;
    opacity: ${props => (props.hasViewModal ? '10%' : 1)};
    h1{
        font:800 2.8rem Nunito, sans-serif;
        animation: ${keyframes`${bounceInLeft}`} 1s linear;
        margin: 2rem 0 .5rem;
        line-height: 3rem;
        width: 100%;
    }
    p{
        animation: ${keyframes`${bounceIn}`} 2s linear;
        font-size: 1.6rem;
    }
    img{
        animation: ${keyframes`${bounceIn}`} .6s linear;
        height: 100%;
        width: 15rem;
        margin: .5rem 0;
    }
    a{
        position: relative;
        animation: ${keyframes`${bounceIn}`} 2s linear;
        margin: 2rem 0; 
        span{
            color: ${props => (props.theme.title === 'light' ? props.theme.colors.buttonText : props.theme.colors.white)};
            font-size: 2.2rem;
            transition: .25s;
            display: flex;
            justify-content:center;
            align-items:center;
        }
        display: flex;
        justify-content:center;
        align-items:center;
        border-radius: 1rem;
        width: 4rem;
        height: 4rem;
        transition: .25s;
        background-color: ${props => props.theme.colors.buttonPrimary};
        :hover{
            background-color: ${props => (props.theme.title === 'light' ? props.theme.colors.buttonPrimaryDark : props.theme.colors.white)};
            span{
                color: ${props => (props.theme.title === 'light' ? props.theme.colors.buttonTextDark : props.theme.colors.black)};
            }
        }
    }
    @media(min-width: 1120px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        h1{
            margin: 2rem 0;
            font-size: 4rem;
            line-height: 4rem;
            max-width: 12rem;
        }
        p{
            max-width: 16rem;
            font-size: 1rem;
        }
        img{
            display: none;
        }
        a{
            top: 2.5rem;
        }
    }
`;

export const ImgDesk = styled.div`
    display: none;
    @media(min-width: 1120px){
        padding: 2rem;
        height: 80%;
        right: 10rem;
        top: 5rem;
        position: absolute;
        display: flex;
        width: 100%;
        background: url(${props => (props.theme.title === 'light' ? heroImg : heroDarkImg)}) no-repeat 80% center;
        background-size: contain;
    }
`;
