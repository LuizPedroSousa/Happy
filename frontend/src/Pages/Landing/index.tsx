import React from 'react';

import {
  Container,
  ContentWrapper,
  Header,
  ImgDesk,
} from './styles';

import { BsArrowRightShort } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import logoImg from '../../Assets/Images/logo.svg';
import heroImg from '../../Assets/Images/hero.svg';
const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="happy" />
        <main>
          <strong>São Paulo</strong>
          <p>São Paulo, ZN</p>
        </main>
      </Header>
      <ContentWrapper>
        <div>
          <h1>Leve a felicidade para o mundo.</h1>
          <p>
            Visite orfanatos e mude o dia
            de muitas crianças.
          </p>
        </div>
        <img src={heroImg} alt="crianças" />
        <ImgDesk>
        .
        </ImgDesk>
        <Link to="">
          <span>
            <BsArrowRightShort />
          </span>
        </Link>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
