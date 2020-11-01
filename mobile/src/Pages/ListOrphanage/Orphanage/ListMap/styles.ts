import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { shade, lighten } from 'polished';

export const Container = styled.View`
    width: 100%;
    position: relative;
    z-index: 2;
    margin: 14px 0 0;

`;

export const MapContent = styled.View`
    width: 100%;
    height: 150px;
    border-radius: 18px;
    overflow: hidden;
    border-color: ${props => lighten(0.2, props.theme.colors.textComplement)};
    border-width: 1px;
    elevation: 1.1;
`;

export const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;


export const ShowRoutes = styled.TouchableOpacity`
    height: 80px;
    width: 100%;
    position: relative;
    justify-content:center;
    align-items:center;
    background-color: ${props => props.theme.colors.primaryLight};
    border-color: ${props => shade(0.1, props.theme.colors.primaryLight)};
    border-width: 1px;
    border-radius: 18px;
    elevation: 1;
    z-index: 1;
    padding: 20px 0 0;
    top: -30px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.primaryDark};
    font-size: 15px;
    font-family: Bold;
`;