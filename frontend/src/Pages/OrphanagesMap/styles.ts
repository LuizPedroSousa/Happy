import styled, { keyframes } from 'styled-components';
import { lighten, shade } from 'polished';
import { tada } from 'react-animations';

const Container = styled.div`
    width: 100%;
    height: 140vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .leaflet-container{
        z-index: 5;
    }
    .popupMark .leaflet-popup-content-wrapper{
        border-radius: .8rem;
        background-color: ${props => props.theme.colors.white};
        box-shadow: none;
        transition: .25s;
    }

    .popupMark .leaflet-popup-content{
        color: ${props => shade(0.4, props.theme.colors.primary)};
        font: 700 1rem Nunito;
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin: .5rem 1.2rem;
        a{
            background-color: ${props => props.theme.colors.primary};
            width: 2rem;
            height: 2rem;
            border-radius: .5rem;
            display: flex;
            align-items:center;
            justify-content:center;
            transition: .25s;
            span{
                display: flex;
                align-items:center;
                justify-content:center;
                color: ${props => props.theme.colors.white};
                font-size: 1.8rem;
            }
            :hover{
                .popupMark .leaflet-popup-content-wrapper{
                    background-color: #333 !important;
                }
                span{
                    color: ${props => props.theme.title === 'dark' && props.theme.colors.black};
                }
                background-color: ${props => (props.theme.title === 'light' ? shade(0.2, props.theme.colors.primary) : props.theme.colors.white)};
            }
        }
    }

    .leaflet-popup-tip-container{
        display: none;
    }

    .create-orp{
        background-color: ${props => (props.theme.title === 'light' ? props.theme.colors.primary : shade(0.2, props.theme.colors.black))};
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
                color: ${props => (props.theme.title === 'light' ? shade(0.6, props.theme.colors.white) : props.theme.colors.black)};
            }
            background-color: ${props => (props.theme.title === 'light' ? lighten(0.2, props.theme.colors.primary) : props.theme.colors.white)};
        }
    }

    @media(min-width: 1120px){
        flex-direction: row;
        height: 100vh;
        .create-orp{
            right: 5rem;
        }
    }
`;

export default Container;
