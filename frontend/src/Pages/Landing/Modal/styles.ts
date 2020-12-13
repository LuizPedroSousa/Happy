/* eslint-disable consistent-return */
import { shade } from 'polished';
import styled from 'styled-components';

interface IContent{
  hasViewModal: boolean;
  hasViewThemes: boolean;
  hasViewDashboard: boolean;
}

interface IColorsIcon{
  hasViewModal: boolean;
}

export const Content = styled.div<IContent>`
  cursor: ${props => !props.hasViewModal && 'pointer'};
  transition: .5s;
  position: absolute;
  overflow: hidden;
  right: 0;
  z-index: 1;
  top: 0;
  width: ${props => (props.hasViewModal ? '15rem' : '3rem')};
  height: ${props => {
        if (props.hasViewThemes) {
            return '26rem';
        }
        if (props.hasViewDashboard) {
            return '32rem';
        }
        if (props.hasViewModal) {
            return '24rem';
        }
        return '3rem';
    }};
  padding: ${props => {
        if (props.hasViewModal && props.hasViewThemes) {
            return '4rem 2rem';
        }
        if (props.hasViewModal) {
            return '4rem 2rem';
        }
        return '.5rem';
    }};
  background-color: ${props => (props.theme.title === 'light' ? props.theme.colors.buttonPrimary : props.theme.colors.black)};
  border-radius: 0 0 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: ${props => props.hasViewModal
    && `-.8rem 1rem 2rem ${shade(
        0.5,
        props.theme.title === 'dark'
            ? props.theme.colors.black
            : props.theme.colors.buttonPrimary,
    )}`};
  :hover {
    background-color: ${props => {
        if (!props.hasViewModal) {
            if (props.theme.title === 'dark') {
                return props.theme.colors.white;
            }
            return props.theme.colors.buttonPrimaryDark;
        }
    }};
    span {
      color: ${props => {
        if (!props.hasViewModal) {
            if (props.theme.title === 'dark') {
                return props.theme.colors.black;
            }
            return props.theme.colors.buttonTextDark;
        }
    }};
    }
    width: ${props => !props.hasViewModal && '4rem'};
    height: ${props => !props.hasViewModal && '4rem'};
    box-shadow: ${props => !props.hasViewModal
      && `-.1rem 0 2rem ${shade(
          0.5,
          props.theme.title === 'dark'
              ? props.theme.colors.white
              : props.theme.colors.buttonTextDark,
      )}`};
  }
`;

export const Exit = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  left: .5rem;
  top: .2rem;
  border: 0;
  background: none;
  transition: .25s;
  outline:0; 
  cursor: pointer;
  span{
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 2rem;
    color: ${props => props.theme.colors.white};
    transition: .25s;
  }

  :hover{
    span{
      color: ${props => shade(0.2, props.theme.colors.white)};
      font-size: 3rem;
    }
  }
`;

export const ColorsIcon = styled.span<IColorsIcon>`
  color: ${props => (!props.hasViewModal && props.theme.title === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.buttonText)};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: ${props => props.theme.colors.black};
  }
`;
