import styled, { keyframes } from 'styled-components';

import {
    bounceInLeft,
    bounceIn,
} from 'react-animations';
import { shade, lighten } from 'polished';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    div{
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin: 0 0 2rem;
        width: 100%;
    }
    div img{
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
        div{
            margin: 0 0 4rem;
        }
        div img{
            width: 3rem;
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

export const Arrow = styled.button`
    width: 4rem;
    height: 4rem;
    outline: 0;
    border: 0;
    background-color: ${props => props.theme.title === 'light' ? shade(0.1, props.theme.colors.primaryDark) : props.theme.colors.black};
    display: flex;
    justify-content:center;
    transition: .25s;
    align-items:center;
    border-radius: .8rem;
    cursor: pointer;
    span{
        display: flex;
        justify-content:center;
        align-items:center;
        color:${props => props.theme.colors.white};
    }

    animation: ${keyframes`${bounceIn}`} 1s linear;

    :hover{
        span{
            color: ${props => props.theme.title === 'dark' && props.theme.colors.black};
        }
        padding: 1rem;
        background-color: ${props => props.theme.title === 'light' ? lighten(0.2, props.theme.colors.primaryDark) : props.theme.colors.white};
    }
    @media(min-width: 1120px){
        width: 3.5rem;
        height: 3.5rem;
    }
`;