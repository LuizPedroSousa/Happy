import { lighten, shade } from 'polished';
import styled, { keyframes } from 'styled-components';

// multiples
interface IStyle{
    hasViewThemes: boolean;
}

interface IThemesContainer extends IStyle{
    hasViewDashboard: boolean;
}

interface IButton{
    hasViewModal: boolean;
}

// Animations
const Shadow = (color: string) => keyframes`
    0%{
        box-shadow: 0 0 .2rem ${color};
    }
    50%{
        box-shadow: 0 0 1rem ${color};
    }
    100%{
           box-shadow: 0 0 .2rem ${color};
    }
`;

export const ThemesContainer = styled.div<IThemesContainer>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    position: relative;
    transition: 1s ease-in;
    top: ${props => {
        if (props.hasViewDashboard) {
            return '-4rem';
        }
        return '4rem';
    }};
`;

export const Button = styled.button<IButton>`
    background-color: ${props => props.theme.colors.buttonSecondary};
    width: 100%;
    height: 3.1rem;
    border: 0;
    color: ${props => props.theme.colors.white};
    border-radius: .8rem;
    outline: 0;
    position: relative;
    font: 800 1.8rem Nunito;
    z-index: 11;
    cursor: pointer;
    opacity: ${props => (!props.hasViewModal ? 0 : 1)};
    transition: .25s;
    :hover{
        background-color: ${props => shade(0.2, props.theme.colors.buttonSecondary)};
    }
`;

export const ThemesContent = styled.div<IStyle>`
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: relative;
    transition: 1s ease;
    width: 100%;
    overflow: hidden;
    z-index: ${props => (props.hasViewThemes ? 1 : -1)};
    top: ${props => (!props.hasViewThemes ? '-4rem' : '0')};
    span{
        padding: 1rem;
        z-index: 10;
        transition: .25s;
        &+span{
            margin: 1rem 0 0;
        }
        font-size: 100%;
    }
`;

export const MoonIcon = styled.span<IStyle>`
    display: flex;
    justify-content:center;
    align-items:center;
    color: ${props => props.theme.colors.white};
    transition: 1s !important;
    opacity: ${props => (!props.hasViewThemes ? 0 : 1)};
    cursor: pointer;
    :hover{
        color: ${props => shade(0.2, props.theme.colors.white)};
    }
`;

export const SunnyIcon = styled(MoonIcon)`
    transition: 1s .5s !important;
`;

export const SpanGreen = styled.span<IStyle>`
    transform: translateX(${props => (!props.hasViewThemes ? '50rem' : '0rem')});
    border-radius: .8rem;
    transition: ${props => (props.hasViewThemes ? '1s !important' : '.8s !important')};
    background-color: ${props => props.theme.colors.buttonForm};
    position: absolute;
    z-index: 10;
    height: 3.2rem;
    width: 3.2rem;
    top: 1.3rem;
    opacity: ${props => (props.hasViewThemes ? 1 : 0)};
    right: ${props => (props.theme.title === 'dark' ? '7.5rem' : '.3rem')};
    animation: ${props => props.hasViewThemes
        && props.theme.title === 'dark'
        && Shadow(props.theme.colors.buttonForm)} 1s linear infinite;

    :hover{
        background-color: ${props => lighten(0.8, props.theme.colors.buttonForm)};
    }
`;

export const SpanPink = styled(SpanGreen)`
    background-color: ${props => props.theme.colors.alert};
    top: .3rem;
    transition: ${props => (props.hasViewThemes ? '1s .5s !important' : '.8s !important')};
    transform: translateX(${props => (!props.hasViewThemes ? '50rem' : '0rem')});
    right: ${props => (props.theme.title === 'dark' ? '.3rem' : '7.5rem')};
    :hover{
        background-color: ${props => lighten(
        0.5,
        props.theme.colors.alert,
    )};
    }
    animation: ${props => props.hasViewThemes
        && props.theme.title === 'dark'
        && Shadow(props.theme.colors.alert)} 1s linear infinite;
`;
