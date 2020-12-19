import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  width: 100%;
  & +&{
    margin: 2rem 0 0;
  }

  @media(min-width: 1120px){
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
`;

export const Ilustration = styled.img`
  width: 3rem;
  margin: 0 2rem 0 0;
`;

export const TipText = styled.p`
  color: ${props => (props.theme.title === 'dark' ? props.theme.colors.secondaryDark : props.theme.colors.primary)};
  font: 700 1.25rem Nunito;
`;
