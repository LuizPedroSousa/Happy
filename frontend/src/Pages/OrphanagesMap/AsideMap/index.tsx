import React, { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Aside from '../../../Components/Aside';

import {
    Header,
    Footer,
    Arrow,
} from './styles';

import markLightImg from '../../../Assets/Images/mark_down_map.svg';
import markDarkImg from '../../../Assets/Images/mark_down_map_dark.svg';

const AsideMap: React.FC = () => {
    // Contexts
    const { title } = useContext(ThemeContext);

    // Others Hocks
    const history = useHistory();

    // Handles && Toggles
    const handlePushToLanding = () => history.push('/');
    return (
        <Aside>
            <Header>
                <div>
                    <img src={title === 'light' ? markLightImg : markDarkImg} alt="markermap" />
                    <Arrow onClick={handlePushToLanding}>
                        <span>
                            <BiArrowBack />
                        </span>
                    </Arrow>
                </div>
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
        </Aside>
    );
};

export default AsideMap;
