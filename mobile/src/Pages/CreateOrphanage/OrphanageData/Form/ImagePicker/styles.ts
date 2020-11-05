import styled from 'styled-components/native';

export const ImageBlock = styled.View`
    width: 100%;
    margin: 0 0 30px;
`;

export const Label = styled.Text`
    font-size: 15px;
    font-family: SemiBold;
    color: ${props => props.theme.colors.textComplement};
    margin: 0 0 8px;
`;

export const PickerButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.primary};
    border-style: dashed;
    border-width: 2px;
    border-radius: 16px;
    justify-content:center;
    align-items:center;

`;