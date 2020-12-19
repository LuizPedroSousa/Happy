import styled from 'styled-components';

interface IContainer{
    hasViewModal:boolean;
}

const Container = styled.div<IContainer>`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
        321deg,
        ${props => props.theme.colors.secondary},
        ${props => props.theme.colors.primary}
    );
    transition: .25s;
    padding: 1.4rem;
    opacity: ${props => (props.hasViewModal ? '80%' : 1)};
    @media(min-width: 1120px){
        padding: 0 8rem;
    }
`;

export default Container;
