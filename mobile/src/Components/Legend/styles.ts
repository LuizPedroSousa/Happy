import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
    justify-content:center;
    align-items:flex-start;
    border-color: ${props => lighten(0.2, props.theme.colors.textComplement)};
    border-bottom-width: 1px;
    padding: 14px 0 20px;
    margin: 14px 0 16px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.textComplementDark};
    font-size: 26px;
    font-family: ExtraBold;
`;