import styled from 'styled-components';
import AsideLightBG from '../../Assets/Images/Aside_background.svg';
import AsideDarkBG from '../../Assets/Images/Aside_background_dark.svg';

export const Wrapper = styled.aside`
    background-color: ${props => props.theme.colors.primary};
    background: url(${props => props.theme.title === 'light' ? AsideLightBG : AsideDarkBG}) center;
    height: 80vh;
    padding: 2.8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media(min-width: 1120px){
        height: 100vh;
        width: 20rem;
        padding: 3rem;
    }
`;