import styled from 'styled-components/native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
    flex: 1;
`;

export const ShimmerView = styled(ShimmerPlaceholder)`
    width: 100%;
    height: 250px;
`;

export const Content = styled.View`
    padding: 14px;
    width: 100%;
`;

export const ShimmerTitle = styled(ShimmerPlaceholder)`
    width: 60%;
    height: 20px;
    margin: 26px 0 ;
    border-radius: 8px;
`;

export const ShimmerText = styled(ShimmerPlaceholder)`
    margin: 0 0 6px;
    height: 14px;
    border-radius: 8px;
    width: 80%;
`;

export const ShimmerMap = styled(ShimmerPlaceholder)`
    margin: 30px 0;
    border-radius: 20px;
    width: 100%;
    height: 150px;
    elevation: 1.1;
`;

export const ShimmerViewRoute = styled(ShimmerPlaceholder)`
    width: 100%;
    border-radius: 20px;
    height: 80px;
    position: relative;
    bottom: 60px;
    elevation: 1;
`;

export const Cards = styled.View`
    margin: 20px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;


export const ShimmerCard = styled(ShimmerPlaceholder)`
    width: 48%;
    height: 160px;
    margin: 14px 0 0;
    border-radius: 20px;
`;

export const ShimmerButton = styled(ShimmerPlaceholder)`
    width: 100%;
    height: 60px;
    border-radius: 20px;
    margin: 20px 0 16px;
`;