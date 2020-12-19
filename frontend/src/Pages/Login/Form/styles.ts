import { shade } from 'polished';
import styled from 'styled-components';

interface ICheckbox{
  hasChecked:boolean;
}

export const Options = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  width: 100%;
  margin: 1.5rem 0 3rem;
  a{
    transition: .25s;
    font: 600 .8rem Nunito;
    color: ${props => props.theme.colors.textComplement};
    text-decoration: none;
    :hover{
      color: ${props => shade(0.2, props.theme.colors.textComplement)};
    }
  }
  
  @media(min-width: 1120px){
    margin: 1.5rem 0 2.5rem;
    a{
      font-size: 1rem;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  width: 6.5rem;
  p{
    font: 600 .8rem Nunito;
    color: ${props => (props.theme.colors.textComplement)};
    cursor: pointer;
    transition: .25s;
    :hover{
      color: ${props => shade(0.2, props.theme.colors.textComplement)};
    }
  }

  @media(min-width: 1120px){
    width: 8rem;
    p{
      font-size:1rem;
    } 
  }
`;

export const Checkbox = styled.label<ICheckbox>`
  width: 1.5rem;
  height: 1.5rem;
  outline: 0;
  border-radius: .6rem;
  transition: .25s;
  background-color: ${props => (!props.hasChecked ? props.theme.colors.input : props.theme.colors.buttonForm)};
  border: 1px solid ${props => props.theme.colors.outlineBase};
  display: flex;
  justify-content:center;
  align-items:center;
  span{
    display: flex;
    justify-content:center;
    align-items:center;
    transition: .25s;
    opacity: ${props => (props.hasChecked ? 1 : 0)};
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
  }
  cursor: pointer;
  :hover{
    background-color: ${props => (!props.hasChecked
        ? shade(0.2, props.theme.colors.input)
        : shade(0.2, props.theme.colors.buttonForm))};
    span{
      font-size: .5rem;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: 2rem 0 0;
  div{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    P{
      color: ${props => props.theme.colors.textComplement};
      font: 400 1.1rem Nunito;
    }
    a{
      font: 600 1.2rem Nunito;
      color: ${props => (props.theme.title === 'dark' ? props.theme.colors.primaryDark : props.theme.colors.primary)};
    }
  }
  p{
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    color: ${props => props.theme.colors.textComplement};
    font: 400 1rem Nunito;
    span{
      font-size: 1rem;
      color: ${props => (props.theme.title === 'dark' ? props.theme.colors.secondaryDark : props.theme.colors.primary)};
    }
  }

  @media(min-width: 1120px){
    margin: 1.5rem;
    p{
      flex-direction: row;
      span{
        margin: .4rem 0 0 .3rem;
      }
    }
    div{
      p,
      a{
        font-size: 1rem;
      }
    }
  }
`;

export const SpanPassword = styled.span`
  color: ${props => (props.theme.title === 'dark' ? props.theme.colors.secondaryDark : props.theme.colors.primary)};
  transition: .25s;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  bottom: .1rem;
  :hover{
    color: ${props => shade(0.2, props.theme.title === 'dark' ? props.theme.colors.secondaryDark : props.theme.colors.primary)};
  }
`;
