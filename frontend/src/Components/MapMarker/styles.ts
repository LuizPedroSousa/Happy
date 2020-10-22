import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10rem;
    margin: 0 0 6rem;
    border-radius: 1rem 2rem 0 0;
    background-color: ${props => props.theme.colors.input};
    border: 1px solid ${props => props.theme.colors.outlineBase};
    @media(min-width: 1120px){
        height: 15rem;
    }
`;

export const Location = styled.div`
    border: 1px solid ${props => props.theme.colors.outlineBase};
    border-radius: 0 0 1rem 1rem;
    width: 100%;
    padding: 1rem 2rem;
    background-color: ${props => props.theme.title === 'light' ? props.theme.colors.input : props.theme.colors.background};
    p{
        text-align: center;
        max-width: 13rem;
        font: 700 1rem Nunito;
        color: ${props => props.theme.title === 'light' ? shade(0.2, props.theme.colors.primary) : props.theme.colors.white};
    }

    @media(min-width: 1120px){
        padding: .8rem 4rem;
        p{
            max-width: 100%;
        }
    }
`;