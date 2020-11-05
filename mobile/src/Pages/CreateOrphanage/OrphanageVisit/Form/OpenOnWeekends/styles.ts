import { lighten } from 'polished';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const WeekendsContent = styled.View`
    margin: 14px 0;
`;

export const Label = styled.Text`
    font-size: 15px;
    font-family: SemiBold;
    color: ${props => props.theme.colors.textComplement};
    margin: 0 0 10px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    height: 56px;
    overflow: hidden;
`;

export const PrimaryButtonContent = styled.View`
    border-color: ${props => lighten(0.2, props.theme.colors.textComplement)};
    border-width: 1px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${props => props.theme.colors.white};
    height: 100%;
    width: 50%;
    justify-content:center;
    align-items:center;
`;

export const SecondaryButtonContent = styled(PrimaryButtonContent)`
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
`;


export const ButtonWeekends = styled(BorderlessButton)`
    width: 100%;
    height: 80%;
    justify-content:center;
    align-items:center;
`;

export const ButtonText = styled.Text`
    color: ${props => props.theme.colors.textComplement};
    font-size: 15px;
    font-family: ExtraBold;
`;