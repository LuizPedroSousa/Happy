import React, { useContext } from 'react';
import Aside from '../Aside';
import markLightImg from '../../Assets/Images/mark_down_map.svg';
import markDarkImg from '../../Assets/Images/mark_down_map_dark.svg';
import { useHistory } from 'react-router-dom';

import {
  Header,
  Footer,
} from './styles';

import {
  BsArrowLeft
} from 'react-icons/bs';
import { ThemeContext } from 'styled-components';

const AsideCreateOrphanage: React.FC = () => {
  //Contexts
  const { title } = useContext(ThemeContext);

  //Others Hocks
  const history = useHistory();

  //Utilites
  const leavemeBack = () => {
    return history.goBack();
  }
  return (
    <Aside >
      <Header>
        <img src={title === 'light' ? markLightImg : markDarkImg} alt="Marcador" />
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
