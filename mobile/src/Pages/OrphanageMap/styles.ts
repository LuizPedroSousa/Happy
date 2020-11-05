import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants'


import { Platform } from 'react-native';

const StatusBarHeight =
    Platform.OS == "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding-top: ${StatusBarHeight + 'px'};
`;

export const Popup = styled.View`
    flex-direction: row;
    opacity: 60;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.white};
    padding: 0 10px;
    justify-content:space-between;
    position: relative;
    align-items:center;
    elevation: 3;
    border-radius: 8px;
`;

export const MarkerName = styled.Text`
    justify-content:center;
    align-items:center;
    font-size:18px;
    font-family: Bold;
    color: ${props => props.theme.colors.textComplement};

`;

export const Arrow = styled.View`
    right: 10px;
    position: absolute;
    justify-content:center;
    align-items:center;
    height: 30px;
    width: 30px;
    border-radius: 4px;
    padding: 4px;
    background-color: ${props => props.theme.colors.primary};
`;


export const Footer = styled.View`
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    width: 80%;
    border-radius: 16px;
    padding: 8px 16px;
    height: 56px;
    background-color: ${props => props.theme.colors.white};
    position: absolute;
    bottom: 36px;
    left: 35px;
    elevation: 3;
`;

export const Create = styled(RectButton)`
    background-color: ${props => props.theme.colors.primary};
    height: 56px;
    width: 56px;
    position: absolute;
    right: -2px;
    justify-content:center;
    align-items: center;
    border-radius: 20px;
`;

export const Title = styled.Text`
    font-family: Bold;
    color: ${props => props.theme.colors.textComplement};
`;