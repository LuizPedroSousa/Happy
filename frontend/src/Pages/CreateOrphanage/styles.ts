import styled from 'styled-components';

export const Container = styled.div`
    .aside{
        height: 8rem;
        flex-direction: row;
        align-items: center;
    }

    @media(min-width: 1120px){
        .aside{
            height:100vh;
            flex-direction: column;
            width: 5rem;
        }
    }
`;

export const Title = styled.h1`
    color: ${props => props.theme.colors.textComplement};
    font-size: 1.2rem;
    margin: 2rem 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 1.2rem;
`;