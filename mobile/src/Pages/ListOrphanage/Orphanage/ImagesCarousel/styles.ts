import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    justify-content:center;
    align-items:center; 
`;

export const ImageDontExists = styled.View`
    flex: 1;
    height: 250px;
    padding: 14px;
    justify-content:center;
    align-items:center;
    width: 100%;
    background-color: ${props => props.theme.colors.alert};
`;

export const Image = styled.Image`
    width: 60px;
    height: 60px;
`;

export const Title = styled.Text`
   margin: 0 0 14px;
    font-size: 40px;
    color: ${props => props.theme.colors.white};
    font-family: ExtraBold;
`;

export const Description = styled.Text`
    font-size: 20px;
    text-align:center;
    color: ${props => props.theme.colors.white};
    max-width: 285px;
`;