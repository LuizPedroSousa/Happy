import { shade } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.buttonPrimary};
    flex: 1;
    justify-content:center;
    align-items:center;
    padding: 0 20px;
`;


export const Hero = styled.Image`
    margin: 0 0 14px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 40px;
    font-family: ExtraBold;
`;

export const Description = styled.Text`
    color :${props => props.theme.colors.white};
    font-size: 20px;
    font-family: SemiBold;
    margin: 14px 0 28px;
    text-align:center;
`;

export const FinishButton = styled(RectButton)`
    width: 120px;
    height: 56px;
    border-radius: 20px;
    background-color: ${props => shade(0.1, props.theme.colors.buttonPrimary)};
    justify-content:center;
    align-items:center;
`;

export const FinishText = styled.Text`
    font-size: 15px;
    color: ${props => props.theme.colors.white};
    font-family: ExtraBold;
`;