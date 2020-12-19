import { shade } from 'polished';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

interface IContainer{
  hasFooter: boolean;
}

export const Container = styled.form<IContainer>`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  background-color: ${props => (props.theme.title === 'dark' ? props.theme.colors.background : props.theme.colors.white)};
  padding: ${props => (props.hasFooter ? '2rem 2rem' : '2rem 2rem 4rem')};
  position: relative;
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

export const Button = styled.button`
  width: 100%;
  height: 4.2rem;
  border-radius: 1.4rem;
  background-color: ${props => props.theme.colors.buttonForm};
  border: 0;
  outline: 0;
  transition: .25s;
  font: 700 1.4rem Nunito;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  :hover{
    background-color: ${props => shade(0.2, props.theme.colors.buttonForm)};
  }

  @media(min-width: 1120px){
    height: 4rem;
    font-size: 1rem;
  }
`;

export const Exit = styled(Link)`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content:center;
  position: relative;
  left: 7rem;
  margin: 0 0 2rem;
  transition: .25s;
  align-items:center;
  border-radius: 1.2rem;
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
