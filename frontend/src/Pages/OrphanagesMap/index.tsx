import React, { useContext } from 'react';

import {
  Container,
  Plus
} from './styles';
import { Link } from 'react-router-dom';
import Aside from './Aside';
import {
  AiOutlinePlus
} from 'react-icons/ai';


import { ThemeContext } from 'styled-components';

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

const OrphanagesMap: React.FC = () => {
  //Contexts
  const { title } = useContext(ThemeContext);

  //InlineStyles
  const mapStyle = {
    width: '100%',
    height: '100%',
  }
  return (
    <Container>
      <Aside />
      <Link to='' component={Plus}>
        <span>
          <AiOutlinePlus />
        </span>
      </Link>
      <Map
        center={[-23.4579916, -46.6827333]}
        zoom={75}
        style={{ ...mapStyle}}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${title == 'light' ? 'light-v10' : 'dark-v10'}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_TOKEN}`} />
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
