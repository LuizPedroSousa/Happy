import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

import { lighten } from 'polished';

const StatusBarHeight = Platform.OS === 'android'
    ? Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    height: 90px;
    border-color: ${props => lighten(0.25, props.theme.colors.textComplement)};
    border-width: 1px;
    padding: ${StatusBarHeight + 'px'} 16px 0;
    background-color: ${props => props.theme.colors.white};

`;

export const Title = styled.Text`
    justify-content:center;
    align-items:center;
    color: ${props => props.theme.colors.textComplement};
    font-size: 16px;
    font-family: SemiBold;
`;

export const PushBack = styled(RectButton)`
    padding: 8px;
`;
export const ExitPage = styled(PushBack)`

`;