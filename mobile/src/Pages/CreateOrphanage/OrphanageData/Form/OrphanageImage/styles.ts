import { lighten } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
export const ImageBlock = styled.ImageBackground`
    width: 100%;
    height: 60px;
    border-radius:20px;
    align-items:center;
    padding: 4px;
    flex-direction: row;
    justify-content: space-between;
    margin: 14px 0;
    border-color: ${props => props.theme.colors.buttonPrimary};
    border-width: 1px;
    overflow: hidden;
    background-color: ${props => lighten(0.2, props.theme.colors.buttonPrimary)};
`;

export const Content = styled(RectButton)`
    width: 250px;
    flex-direction: row;
    justify-content:flex-start;
    align-items:center;
`;

export const Image = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 8px;
`;

export const Name = styled.Text`
    font-size: 16px;
    margin-left: 10px;
    color:${props => props.theme.colors.buttonPrimary};
    font-family: SemiBold;
`;

export const Icon = styled(RectButton)`
    height: 40px;
    width: 40px;
    justify-content:center;
    align-items:center;
`;