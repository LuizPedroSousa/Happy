import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
    justify-content:center;
    align-items:flex-start;
    border-color: ${props => lighten(0.25, props.theme.colors.textComplement)};
    border-bottom-width: 1px;
    padding: 0 0 20px;
    margin: 0 0 16px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.textComplementDark};
    font-size: 26px;
    font-family: ExtraBold;
`;

export const LegendContent = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;

export const PageIndex = styled.View`
    justify-content: space-between;
    flex-direction: row;
    width: 50px;
`;

export const Index = styled.Text`
    color: ${props => props.theme.colors.textComplement};
    font-family: SemiBold;
`;