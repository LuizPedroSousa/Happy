import styled from 'styled-components';

const Wrapper = styled.aside`
    background: linear-gradient(
        321deg,
        ${props => props.theme.colors.secondary},
        ${props => props.theme.colors.primary}
    );
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

export default Wrapper;
