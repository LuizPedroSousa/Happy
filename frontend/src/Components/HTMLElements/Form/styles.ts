import styled from 'styled-components';
import { lighten } from 'polished';


export const Content = styled.form`
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    padding: 4rem 2rem;
    border-radius: 1rem; 
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;


export const Submit = styled.button`
    background-color: ${props => props.theme.colors.buttonForm};
    color: ${props => props.theme.colors.white};
    transition: .25s;
    border: 0;
    outline: 0;
    border-radius: 1rem;
    width: 100%;
    padding: .5rem 0;
    :hover{
        background-color: ${props => lighten(0.2, props.theme.colors.buttonForm)};
    }
`;