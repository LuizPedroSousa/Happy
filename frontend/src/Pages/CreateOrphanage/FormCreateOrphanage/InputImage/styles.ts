import { shade } from 'polished';
import styled from 'styled-components';

export const ImageBlock = styled.div`
    display: flex;
    .InputBlock+&{
        margin-top: 1rem;
    }
    flex-direction: column;
    input[type="file"]{
        display: none;
    }
`;


export const SelectImg = styled.label`
        height: 5rem;
        width: 5rem;
        display: flex;
        transition: .25s;
        justify-content:center;
        border-radius: .8rem; 
        border: 2px dashed ${props => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.white};
        align-items:center;
        span{
            transition: .25s;
            color: ${props => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.white};
            display:flex;
            justify-content:center;
            align-items:center;
        }
        cursor: pointer;
        :hover{
            span{
                padding: 0 0 .25rem;
                font-size: 2.5rem;
            }
            border: 2px dashed ${props => props.theme.title === 'light' ? shade(0.3, props.theme.colors.primary) : props.theme.colors.alert};
        }
`;