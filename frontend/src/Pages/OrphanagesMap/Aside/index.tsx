import React from 'react';

import {
  Wrapper,
  Header,
  Footer,
} from './styles';
import markImg from '../../../Assets/Images/mark_down_map.svg';
const Aside: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <img src={markImg} alt="markermap" />
        <strong>Escolha</strong>
        <strong>
          um orfanato
        </strong>
        <strong>no mapa</strong>
        <p>
          Muitas crianças estão
          esperando a sua visita :)
        </p>
      </Header>
      <Footer>
        <strong>São Paulo</strong>
        <span>São paulo Zona Norte</span>
      </Footer>
    </Wrapper>
  );
};

export default Aside;
