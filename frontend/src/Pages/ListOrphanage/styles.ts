import { bounceInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .aside{
        height: 8rem;
        width: 100%;
        flex-direction: row;
        align-items: center;
        animation: ${keyframes`${bounceInDown}`} 2s linear;
    }

    @media(min-width: 1120px){
        flex-direction: row;
        align-items: flex-start;
        .aside{
            height:100vh;
            flex-direction: column;
            width: 5rem;
            border-radius: 0 0 2rem 0;
        }
    }
`;

export const Title = styled.h1`
        color: ${props => props.theme.title === 'light' ? props.theme.colors.textComplement : props.theme.colors.white};
        font-size: 1.2rem;
        margin: 2rem 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    padding: 1.2rem;
    form{
        padding: 0 0 4rem 0;
    }
    button{
        font-size: 1.5rem;
        display: flex;
        justify-content:center;
        flex-direction: column-reverse;
        align-items:center;
        width: calc(100% - 2rem);
    }
    @media(min-width: 1120px){
        margin: 0 16rem 0;
        form{
            width: 40rem;
        }

        button{
            justify-content: space-around;
            padding: 1rem 9rem;
            flex-direction: row;
            margin: 4rem 0 0;
            width: calc(100% - 5rem);
        }
    }
`;
