import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 1.4rem 2rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items:center;
  background-color: ${props => props.theme.colors.buttonForm};
  img{
    width: 60%;
  }

  @media(min-width: 1120px){
    flex-direction: row;
    justify-content:center;
    padding: 3rem 4.4rem 2rem;
    img{
      width: 25rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  h1{
    font: 800 5rem Nunito;
  }
  p{
    text-align:center;
    width: 100%;
    max-width: 20.2rem;
    font: 600 1.2rem Nunito;
  }
  button{
    margin: 2rem 0 2rem;
    height: 4rem;
    border: 0;
    background-color: ${props => shade(0.2, props.theme.colors.buttonForm)};
    outline: 0;
    width: 100%;
    border-radius: 1.25rem;
    color: ${props => props.theme.colors.white};
    font: 800 1.2rem Nunito;
    transition: .25s;
    :hover{
      background-color: ${props => shade(0.4, props.theme.colors.buttonForm)};
    }
  }
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex-direction: column;
  @media(min-width: 1120px){
    width: 48%;
    height: 23rem;
    p{
      max-width: 25.2rem;
      font-size: 1.5rem;
    }
    button{
      cursor: pointer;
      width: 15.188rem;
    }
  }
`;
