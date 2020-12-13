import styled from 'styled-components';
import backgroundLight from '../../../Assets/Images/landing_background_light.svg';
import backgroundDark from '../../../Assets/Images/landing_background_dark.svg';

interface IContainer{
    hasViewModal:boolean;
}

const Container = styled.div<IContainer>`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    transition: .25s;
    background-image: url(${props => (props.theme.title === 'light' ? backgroundLight : backgroundDark)});
    padding: 1.4rem;
    opacity: ${props => (props.hasViewModal ? '80%' : 1)};
    @media(min-width: 1120px){
        padding: 0 8rem;
    }
`;

export default Container;
