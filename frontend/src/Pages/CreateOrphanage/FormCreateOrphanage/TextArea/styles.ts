import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const TextAreaBlock = styled.div`
    width: 100%;
    & + .InputBlock{
            margin-top: 1rem;
        }
    label{
        display: flex;
        justify-content: flex-start;
        align-items:center;
        margin: 0 0 .5rem;
        strong{
            margin: 0 1rem 0 0;
            font-size:1.1rem; 
            color: ${props => props.theme.colors.textComplement};
        }
        p{
            font-size:1rem; 
            color: ${props => lighten(0.2, props.theme.colors.textComplement)};
        }
    }
    textarea{
        height: 5rem;
        width: 100%;
        outline: 0;
        padding: 1rem 2rem;
        font-size: 1rem;
        border: 1px solid ${props => props.theme.colors.outlineBase};
        background-color: ${props => props.theme.colors.input};
        border-radius: 1rem;
        resize: vertical;
        color: ${props => shade(0.2, props.theme.colors.primary)};
    }

    @media(min-width: 1120px){
        textarea{
            height: 8rem;
        }
    }
`;
