import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const NextPageButton = styled(RectButton)`
    position: absolute;
    bottom: 25px;
    width: 80%;
    background-color: ${props => props.theme.colors.primary};
    height: 50px;
    justify-content:center;
    align-items:center;
    right: 38px;
    border-radius: 18px;
`;
export const Title = styled.Text`
    justify-content:center;
    align-items:center;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    font-family: ExtraBold;
`;