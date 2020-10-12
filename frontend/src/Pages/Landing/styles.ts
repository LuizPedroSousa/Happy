import styled, { keyframes } from 'styled-components';
import backgroundLight from '../../Assets/Images/landing_background_light.svg';
import { bounceIn, bounceInLeft } from 'react-animations';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-image: url(${backgroundLight});
    padding: 1.4rem;
    `;


export const Header = styled.div`
    animation: ${keyframes`${bounceIn}`} 2s linear;
    display: flex;
    justify-content:space-between;
    align-items:center;
    img{
        width: 8rem;
    }
    main{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        strong{
            font-size: 1rem;
        }
        p{
            font-size: 1.4rem;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
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
        animation: ${keyframes`${bounceIn}`} 2s linear;
        margin: 2rem 0; 
        span{
            color: ${props => props.theme.colors.buttonText};
            font-size: 2.2rem;
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
            background-color: ${props => props.theme.colors.buttonPrimaryDark};
            color: ${props => props.theme.colors.buttonTextDark};
        }
    }
`;