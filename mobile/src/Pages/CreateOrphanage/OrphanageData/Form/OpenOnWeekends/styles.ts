import styled from 'styled-components/native';

export const Content = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin: 14px 0;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: Regular;
    color: ${props => props.theme.colors.textComplement};
`;