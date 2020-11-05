import { lighten } from 'polished';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
export const InputBlock = styled.View`
    width: 100%;
    margin: 0  0 12px;
`;

export const Titles = styled.View`
    margin: 8px 0 8px;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`;

export const Label = styled.Text`
    color: ${props => props.theme.colors.textComplement};
    font-size: 15px;
    font-family: SemiBold; 
`;

export const Description = styled(Label)`
    color: ${props => lighten(0.1, props.theme.colors.textComplement)};
    font-size: 15px;
`;

export const InputContent = styled(TextInput)`
    width: 100%;
    text-transform: capitalize;
    padding: 14px;
    height: 56px;
    font-size: 18px;
    font-family: SemiBold;
    color: ${props => props.theme.colors.textComplement};
    border-radius: 16px;
    border-color: ${props => lighten(0.2, props.theme.colors.textComplement)};
    border-width: 1px;
    background-color: ${props => props.theme.colors.white};
`;
