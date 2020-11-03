import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const StatusBarHeight = Platform.OS === 'android'
    ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-top: ${StatusBarHeight + 'px'};
`;


export const FirstImage = styled.Image`
    width: 100%;
    height: 250px;
`;

export const FirstTitle = styled.Text`
    font-size: 48px;
    font-family: ExtraBold;
    color: ${props => props.theme.colors.onBoardingTitle};
    justify-content: center;
    padding: 0 25px;
    align-items: flex-start;
    line-height: 50px;
`;

export const SecondImage = styled.Image`
    width: 100%;
    height: 400px;
`;

export const FirstSubtitle = styled.Text`
    color: ${props => props.theme.colors.onBoardingSubTitle};
    font-size: 20px;
    font-family: SemiBold;
    justify-content: flex-start;
    margin: 0 50px 100px 0;
    max-width: 250px;
`;

export const SecondTitle = styled.Text`
    color: ${props => props.theme.colors.onBoardingTitle};
    font-size: 30px;
    font-family: ExtraBold;
    text-align: right;
    justify-content: flex-end;
    max-width: 270px;
    margin: 0 0 100px 30px;
`;

export const Next = styled(RectButton)`
    width: 56px;
    height: 56px;
    background-color: ${props => props.theme.colors.onBoardingNextButton};
    border-radius: 20px;
    margin: 0 20px 40px 0;
    justify-content:center;
    align-items:center;
`;



export const DotLight = styled.View`
    background-color: ${props => props.theme.colors.onBoardingDotLight};
    width: 16px;
    height: 4px;
    border-radius: 4px;
    right: 100%;
    position: relative;
    bottom: 0;
    right: 135px;
    margin: 0 4px 40px;
`;

export const DotSelected = styled.View`
    width: 8px;
    height: 4px;
    border-radius: 4px;
    position: relative;
    right: 135px;
    margin: 0 0 40px;
    background-color: ${props => props.theme.colors.onBoardingDotSelected};
`;

export const DotContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;