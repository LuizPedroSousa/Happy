import { shade } from 'polished';
import styled from 'styled-components';

interface IContainer{
  hasFooter: boolean;
}

interface IButton{
  hasValid: boolean;
}

export const Container = styled.form<IContainer>`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  background-color: ${props => (props.theme.title === 'dark' ? props.theme.colors.background : props.theme.colors.white)};
  padding: ${props => (props.hasFooter ? '2rem 2rem' : '2rem 2rem 4rem')};
  strong{
    width: 100%;
    text-align: left;
    font: 700 2rem Nunito;
    margin: 0 0 2rem;
    color: ${props => (props.theme.title === 'dark' ? props.theme.colors.white : props.theme.colors.textComplementDark)};
  }

  @media(min-width: 1120px){
    width: 46rem;
    padding: ${props => (props.hasFooter ? '4rem 5rem' : '4rem 6rem 8rem')};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 4.2rem;
  margin: 2.8rem 0 1rem;
  z-index: 1;
  position:relative;

  @media(min-width: 1120px){
    height: 4rem;
    margin: 1rem 0 !important;
  }
`;

export const Button = styled.button<IButton>`
  width: 100%;
  height: 100%;
  border-radius: 1.4rem;
  background-color: ${props => props.theme.colors.buttonForm};
  border: 0;
  position: relative;
  z-index: ${props => (props.hasValid ? 1 : -1)};
  opacity: ${props => (props.hasValid ? 1 : 0.5)};
  outline: 0;
  transition: .25s;
  font: 700 1.4rem Nunito;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  :hover{
    background-color: ${props => shade(0.2, props.theme.colors.buttonForm)};
  }

  @media(min-width: 1120px){
    margin: 1rem 0 2.8rem !important;
    font-size: 1rem;
    bottom: 1rem;
  }
`;

export const Exit = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content:center;
  position: relative;
  cursor: pointer;
  left: 7rem;
  margin: 0 0 2rem;
  transition: .25s;
  align-items:center;
  border-radius: 1.2rem;
  border: 0;
  outline: 0;
  background-color: ${props => (props.theme.title === 'dark' ? props.theme.colors.black : props.theme.colors.background)};
  span{
    transition: .25s;
    display: flex;
    justify-content:center;
    align-items:center;
    color: ${props => (props.theme.title === 'dark' ? props.theme.colors.white : props.theme.colors.primary)};
  }

  :hover{
    span{
      color: ${props => (props.theme.title === 'dark' ? props.theme.colors.black : props.theme.colors.background)};
    }
    background-color: ${props => (props.theme.title === 'dark' ? props.theme.colors.white : props.theme.colors.primary)};
  }

  @media(min-width: 1120px){
    margin: 0;
    height: 3rem;
    width: 3rem;
    span{
      font-size: 1.3rem;
    }
    border-radius: .9rem;
    left: 10rem;
  }
`;
