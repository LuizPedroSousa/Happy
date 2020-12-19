import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:  flex;
  justify-content: center;
  padding: 6rem 0;
  align-items:center;
  background: linear-gradient(
    321deg,
    ${props => props.theme.colors.secondary},
     ${props => props.theme.colors.primary}
  );
  strong{
    font: 800 1.8rem Nunito;
  }
  p{
    font: 600 1.6rem Nunito;
  }

`;

export const Content = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  img{
    width: 12rem;
    margin: 0 0 4rem;
  }
`;
