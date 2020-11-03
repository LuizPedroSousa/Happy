import { shade } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 46px;
    justify-content:center;
    align-items:center;
    background-color: ${props => props.theme.colors.alert};
`;

export const Span = styled.View`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.white};
    justify-content:center;
    align-items:center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 32px;
    font-family: ExtraBold;
    margin: 20px 0;
`;

export const Description = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 20px;
    font-family: SemiBold;
    text-align:center;
    margin: 0 0 40px;
    max-width: 250px;
`;

export const ButtonsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const DontCancel = styled.TouchableOpacity`
    border-radius: 20px;
    border-color: ${props => shade(0.2, props.theme.colors.alert)};
    border-width: 2px;
    width: 48%;
    height: 56px;
    justify-content: center;
    align-items:center;
`;

export const Cancel = styled(RectButton)`
    border-radius: 20px;
    width: 48%;
    height: 56px;
    justify-content: center;
    align-items:center;
    background-color : ${props => shade(0.1, props.theme.colors.alert)};
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    font-family: ExtraBold;
    color: ${props => props.theme.colors.white};
`;