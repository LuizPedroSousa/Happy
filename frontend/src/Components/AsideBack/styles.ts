import styled, { keyframes } from 'styled-components';

import { bounceIn, tada } from 'react-animations';

import { lighten } from 'polished';

export const Header = styled.header`
    img{
        animation: ${keyframes`${bounceIn}`} 2s 1s linear;
        margin: .8rem 0 0;
        width: 3.5rem;
    }
`;

export const Footer = styled.footer`
    button{
        animation: ${keyframes`${tada}`} 1s 1s linear;
        width: 3.8rem;
        height: 3.8rem;
        display: flex;
        align-items:center;
        justify-content:center;
        background-color: ${props => props.theme.title === 'light' ? props.theme.colors.primaryDark : props.theme.colors.black};
        border: 0;
        outline: 0;
        border-radius: 1rem;
        cursor: pointer;
        transition: .25s;
        span{
            color: ${props => props.theme.colors.white};
            display: flex;
            justify-content:center;
            align-items:center;
            font-size: 2.4rem;
        }

        :hover{
            background-color: ${props => props.theme.title === 'light' ? lighten(0.2, props.theme.colors.primaryDark) : props.theme.colors.white};
            span{
                color: ${props => props.theme.title === 'dark' && props.theme.colors.black};
            }
        }
    }
`;