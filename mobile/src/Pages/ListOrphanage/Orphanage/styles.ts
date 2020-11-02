import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const OrphanageContent = styled.View`
    padding: 20px;
`;

export const Description = styled.Text`
    margin: 20px 0;
    font-family: SemiBold; 
    font-size: 15px;
    color: ${props => props.theme.colors.textComplementDark};
`;

export const Contact = styled(RectButton)`
    width: 100%;
    height: 60px;
    justify-content:space-evenly;
    margin: 20px 0 0;
    align-items:center;
    flex-direction: row;
    border-radius: 20px;
    padding: 0 36px;
    background-color: ${props => props.theme.colors.buttonPrimary};
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    font-family: ExtraBold;
`;


export const ShimmerContent = styled(ShimmerPlaceholder)`
    width: 100%;
    height: 200px;
`;