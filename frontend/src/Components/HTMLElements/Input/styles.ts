import { shade } from 'polished';
import styled from 'styled-components';

interface IInput{
    hasValidation: boolean;
    hasValue: string;
    hasStatus?: boolean;
}

export const InputBlock = styled.div`
    width: 100%;
    position: relative;
    &+button{
        margin: 4rem 0 0;
    }

    &+.TextareaBlock{
        margin-top: 2rem;
    }
    p{
        color: ${props => props.theme.colors.alert};
        font-size: .5rem;
    }


    div{
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin: 2rem 0 .5rem;
        label{
            position: relative;
            font-size: 1rem;
            color: ${props => (props.theme.title === 'light' ? props.theme.colors.textComplement : props.theme.colors.white)};
        }
        span{
            display: flex;
            font-size: .6rem;
            color: ${props => props.theme.colors.alert};
        }
    }

    @media(min-width: 1120px){
        div{
            margin: 2rem 0 0;
        }
    }

`;

export const InputText = styled.input<IInput>`
    width: 100%;
    transition: .25s;
    padding: .8rem 2rem;
    border: 1px solid ${props => {
        if (props.hasStatus) {
            return props.theme.colors.alert;
        }
        if (props.hasValue === '') {
            return props.theme.colors.outlineBase;
        }
        if (!props.hasValidation) {
            return props.theme.colors.alert;
        }
        return props.theme.colors.green;
    }
};
    outline: 0;
    border-radius: 1rem;
    font-size: 1rem;
    color: ${props => shade(0.2, props.theme.colors.primary)};
    background-color: ${props => props.theme.colors.input};
    @media(min-width: 1120px){
        margin: .5rem 0 0;
        padding: 1rem 2rem;
    }
`;
