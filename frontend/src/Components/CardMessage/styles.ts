import styled, { keyframes } from 'styled-components';
import {
    bounceInRight,
} from 'react-animations';

interface IContainer{
  hasStatus: boolean;
}

interface IExit{
  hasExit: boolean;
}

export const Container = styled.div<IContainer>`
  position: fixed;
  right: 0;
  top: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  border-radius: 1rem;
  flex-direction: column;
  transition: .5s;
  width: 80%;
  background-color: ${props => (props.theme.title === 'dark' ? props.theme.colors.black : props.theme.colors.white)};
  padding: 0 1.3rem 1.5rem;
  z-index: 10;
  border-radius: .2rem;
  animation: ${keyframes`${bounceInRight}`} 1s linear;
  box-shadow: -.5rem .5rem 2rem 0 ${props => (props.theme.title === 'dark' ? props.theme.colors.primaryDarker : props.theme.colors.black)};
  ::after{
    transition: .25s;
    content: '';
    position: absolute;
    height: .4rem;
    width: 100%;
    bottom: 0;
    left: 0;
    animation:  ${keyframes`
      from {
        width: 0;
      }
      to{
        width: 100%;
      }
    `} 3s .25s linear; 
    background-color: ${props => (props.theme.title === 'dark' ? props.theme.colors.primaryDark : props.theme.colors.primary)};
  }

  @media(min-width: 1120px){
    flex-direction: row;
    left: 2rem;
    padding: 2rem 1rem;
    width: 100%;
    max-width: 40rem;
  }
`;

export const LottieGif = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const Content = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  margin: 0 0 2rem;
  @media(min-width: 1120px){
    margin: 0;
  }
`;

export const Title = styled.div`
  width: 100%;
  strong{
    color: ${props => props.theme.colors.alert};
    font: 800 4.2rem Nunito;
  }
  p{

    color: ${props => props.theme.colors.textComplement};
    font: 800 1.5rem Nunito;
    text-align:left;
  }
  @media(min-width: 1120px){
    margin: 0 0 2rem;
  }
`;

export const Exit = styled.button<IExit>`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${props => props.theme.colors.background};
  border: 0;
  outline: 0;
  border-radius: .8rem;
  display: flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  right: .5rem;
  transition: .25s;
  top: .5rem;
  opacity: ${props => (!props.hasExit ? 0.5 : 1)};
  cursor: pointer;
  span{
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
    color: ${props => (props.theme.title === 'dark' ? props.theme.colors.white : props.theme.colors.primary)};
  }
  :hover{
    span{
      color: ${props => (props.theme.title === 'dark' ? props.theme.colors.black : props.theme.colors.background)};
    }
    background-color: ${props => (props.theme.title === 'dark' ? props.theme.colors.white : props.theme.colors.primary)};
  }
`;
