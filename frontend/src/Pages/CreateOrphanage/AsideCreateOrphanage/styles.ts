import styled from 'styled-components';

import { lighten } from 'polished';

export const Header = styled.header`
    img{
        margin: .8rem 0 0;
        width: 3.5rem;
    }
`;

export const Footer = styled.footer`
    button{
        width: 3.8rem;
        height: 3.8rem;
        display: flex;
        align-items:center;
        justify-content:center;
        background-color: ${props => props.theme.colors.primaryDark};
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
            background-color: ${props => lighten(0.2, props.theme.colors.primaryDark)};
        }
    }
`;