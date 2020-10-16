import React, { useContext } from 'react';

import {
  Container,
  Arrow,
  Plus
} from './styles';
import { Link } from 'react-router-dom';
import Aside from './AsideMap';
import {
  AiOutlinePlus
} from 'react-icons/ai';

import { BsArrowRightShort } from 'react-icons/bs';

import { ThemeContext } from 'styled-components';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import markerIcon from '../../Assets/Images/mark_down_map.svg';

import Leaflet from 'leaflet';

const iconMarker = Leaflet.icon({
  iconUrl: markerIcon,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [130, 2],
});

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
      <Link to='/createOrphanage' component={Plus}>
        <span>
          <AiOutlinePlus />
        </span>
      </Link>
      <Map
        center={[-23.4579916, -46.6827333]}
        zoom={75}
        style={{ ...mapStyle }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${title == 'light' ? 'light-v10' : 'dark-v10'}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_TOKEN}`} />
        <Marker
          position={[-23.4579916, -46.6827333]}
          icon={iconMarker}
        >
          <Popup
            closeButton={false}
            minWidth={140}
            maxWidth={240}
            closeOnClick={true}
            closeOnEscapeKey={true}
            className='popupMark'
          >
            Eliza maria
            <Link to="/listOrphanage/:1" component={Arrow}>
              <span>
                <BsArrowRightShort />
              </span>
            </Link>
          </Popup>
        </Marker>
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
