import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.fieldset`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: 0 0 2rem;
    border: 0;
    border-bottom: 1px solid ${props => lighten(0.25, props.theme.colors.textComplement)};
`;

export const Legend = styled.legend`
    margin: 0 0 .5rem;
    color: ${props => shade(0.2, props.theme.colors.textComplement)};
`;