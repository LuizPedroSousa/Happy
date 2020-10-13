import styled, { keyframes } from 'styled-components';
import { lighten, shade } from 'polished';
import { tada } from 'react-animations';
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .leaflet-container{
        z-index: 5;
    }
    @media(min-width: 1120px){
        flex-direction: row;
    }
`;

export const Plus = styled.a`
    background-color: ${props => props.theme.colors.primary};
    transition: .25s;
    height: 4rem;
    width: 4rem;
    border-radius: 1.4rem;
    margin: 2rem 0;
    display: flex;
    position: absolute;
    justify-content: center;
    bottom: 0;
    align-items: center;
    z-index: 10;
    animation: ${keyframes`${tada}`} 2s linear;
    span{
        display: flex;
        align-items:center;
        justify-content: center;
        color: ${props => props.theme.colors.white};
    }
    :hover{
        span{
            color: ${props => shade(0.6, props.theme.colors.white)};
        }
        background-color: ${props => lighten(0.2, props.theme.colors.primary)};
    }
    @media(min-width: 1120px){
        right: 5rem;
    }
`;