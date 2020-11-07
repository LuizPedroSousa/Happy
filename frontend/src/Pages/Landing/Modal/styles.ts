import { lighten } from 'polished';
import styled from 'styled-components';

export const Content = styled.button`
    cursor: pointer;
    transition: .25s;
    position: absolute;
    right: 0;
    top: 0;
    padding: .5rem;
    background-color:${props => props.theme.colors.buttonPrimary};
    outline: 0;
    border: 0;
    border-radius: 0 0 0 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
        position: relative;
        span:nth-child(1){
            border-radius: .8rem;
            background-color: ${props => props.theme.colors.buttonForm};
            position: absolute;
            height: 3.2rem;
            width: 3.2rem;
            top: 6.1rem;
            z-index: 5;
            :hover{
                background-color: ${props => lighten(0.1, props.theme.colors.buttonForm)};
            }
        }
        span:nth-child(2){
            border-radius: .8rem;
            background-color: ${props => props.theme.colors.alert};
            height: 3.2rem;
            width: 3.2rem;
            position: absolute;
            z-index: 5;
            top: .4rem;
            :hover{
                background-color: ${props => lighten(0.1, props.theme.colors.alert)};
            }
        }
        span{
            padding: 1rem;
            z-index: 10;
            transition: .25s;
            &+span{
                margin: 1rem 0 0;
            }
            font-size: 100%;
        }
    }
    span{
        color: ${props => props.theme.colors.white};
        display: flex;
        justify-content:center;
        align-items:center;
    }
    :hover{
        padding: 1rem;
        span{
            color: ${props => props.theme.title === 'light' ? props.theme.colors.buttonTextDark : props.theme.colors.black};
        }
        background-color: ${props => props.theme.title === 'light' ? props.theme.colors.buttonPrimaryDark : props.theme.colors.white};
    }
`;