import styled from 'styled-components';
import backgroundLight from '../../Assets/Images/landing_background_light.svg';
import backgroundDark from '../../Assets/Images/landing_background_dark.svg';
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-image: url(${props => props.theme.title === 'light' ? backgroundLight : backgroundDark});
    padding: 1.4rem;
    @media(min-width: 1120px){
        padding: 0 8rem;
    }
`;
