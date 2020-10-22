import { shade } from 'polished';
import styled from 'styled-components';

export const InputBlock = styled.div`
    width: 100%;
    &+button{
        margin: 4rem 0 0;
    }

    &+.TextareaBlock{
        margin-top: 2rem;
    }

    label{
        font-size: 1.2rem;
        color: ${props => props.theme.title === 'light' ? props.theme.colors.textComplement : props.theme.colors.white};
    }
    input{
        width: 100%;
        transition: .25s;
        padding: .8rem 2rem;
        border: 1px solid ${props => props.theme.colors.outlineBase};
        outline: 0;
        border-radius: 1rem;
        font-size: 1rem;
        color: ${props => shade(0.2, props.theme.colors.primary)};
        background-color: ${props => props.theme.colors.input};
    }

    @media(min-width: 1120px){
        input{
            margin: .5rem 0 0;
            padding: 1rem 2rem;
        }
    }
`;
