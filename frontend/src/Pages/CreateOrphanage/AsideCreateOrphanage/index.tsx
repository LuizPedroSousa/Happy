import React from 'react';
import Aside from '../../../Components/Aside';
import markImg from '../../../Assets/Images/mark_down_map.svg';

import { useHistory } from 'react-router-dom';

import {
  Header,
  Footer,
}from './styles';

import {
  BsArrowLeft
} from 'react-icons/bs';

const AsideCreateOrphanage: React.FC = () => {
  const history = useHistory();
  const leavemeBack = () => {
    return history.goBack();
  }
  return (
    <Aside >
      <Header>
        <img src={markImg} alt="Marcador" />
      </Header>
      <Footer>
        <button onClick={leavemeBack}>
          <span>
            <BsArrowLeft />
          </span>
        </button>
      </Footer>
    </Aside>
  );
};

export default AsideCreateOrphanage;
