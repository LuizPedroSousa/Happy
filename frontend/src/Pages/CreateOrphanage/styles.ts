import styled, {keyframes} from 'styled-components';

import { bounceInDown } from 'react-animations';


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
    color: ${props => props.theme.colors.textComplement};
    font-size: 1.2rem;
    margin: 2rem 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 1.2rem;
    @media(min-width: 1120px){
        margin: 0 16rem 0;
    }
`;