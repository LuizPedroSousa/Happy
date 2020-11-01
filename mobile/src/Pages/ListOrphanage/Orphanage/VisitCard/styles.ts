import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin: 14px 0 20px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: SemiBold;
    color: ${props => props.theme.colors.textComplementDark};
`;

export const OpeningHours = styled.ImageBackground`
    width: 48%;
    overflow: hidden;
    justify-content:space-evenly;
    border-radius: 20px;
    padding: 30px 20px;
    align-items: flex-start;
    height: 160px;
    border-color: ${props => props.theme.colors.primary};
    border-width: 1px;
`;

export const OpenOnWeekends = styled(OpeningHours)`
    border-color: ${props => props.theme.colors.buttonPrimary};
`;