import styled, { keyframes } from 'styled-components';
import { bounceInLeft, bounceIn } from 'react-animations';
import AsideBackground from '../../../Assets/Images/Aside_background.svg';
export const Wrapper = styled.aside`
    background-color: ${props => props.theme.colors.primary};
    background: url(${AsideBackground}) center;
    height: 80vh;
    padding: 2.8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media(min-width: 1120px){
        height: 100vh;
        width: 20rem;
        padding: 3rem;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    img{
        margin: 0 0 2rem;
        animation: ${keyframes`${bounceInLeft}`} 1s linear;
    }
    strong{
        animation: ${keyframes`${bounceIn}`} 2s linear;
        max-width: 12rem;
    }
    strong:nth-child(4){
        animation: ${keyframes`${bounceInLeft}`} 2s linear;
        margin: 0 0 .5rem;
    }
    p{
        animation: ${keyframes`${bounceIn}`} 1s linear;
        font-size: 1.2rem;
    }
    @media(min-width: 1120px){
        img{
            width: 3rem;
            margin: 0 0 4rem;
        }
        strong:nth-child(4){
            margin: 0 0 .8rem;
        }
        p{
            max-width: 14rem;
        }
    }
`
export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    line-height: 1.5rem;
    strong{
        animation: ${keyframes`${bounceIn}`} 1s linear;
        font-size: 1rem;
    }
    span{
        animation: ${keyframes`${bounceIn}`} 1s linear;
        font-size: 1rem;
    }
`