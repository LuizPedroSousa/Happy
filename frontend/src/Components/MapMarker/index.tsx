import React, { useContext } from 'react';

import {
  Container,
  Location,
} from './styles';

import { Map, TileLayer, Marker } from 'react-leaflet';


import markerIcon from '../../Assets/Images/mark_down_map.svg';

import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { ThemeContext } from 'styled-components';

const iconMarker = Leaflet.icon({
  iconUrl: markerIcon,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [130, 2],
});


const MapMarker: React.FC = () => {
  //Contexts
  const { title } = useContext(ThemeContext);

  //Inline Styles
  const mapStyle = {
    width: '100%',
    height: '100%',
    borderTopRightRadius: '2rem',
    borderTopLeftRadius: '1rem',
  }
  return (
    <Container>
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
        </Marker>
      </Map>
      <Location>
        <p>Clique no mapa para adicionar a localização</p>
      </Location>
    </Container>
  );
};

export default MapMarker;
