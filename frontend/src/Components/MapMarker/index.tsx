import React, { useContext } from 'react';

import {
  Container,
  Location,
} from './styles';

import { Map, TileLayer } from 'react-leaflet';



import 'leaflet/dist/leaflet.css';
import { ThemeContext } from 'styled-components';
import { LeafletMouseEvent } from 'leaflet';

interface MapProps {
  Title?: string;
  MarkDown?: JSX.Element;
  clickEvent?(e: LeafletMouseEvent): void;
}

const MapMarker: React.FC<MapProps> = ({ Title, MarkDown, clickEvent }) => {
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
        onClick={clickEvent}
        center={[-23.4579916, -46.6827333]}
        zoom={75}
        style={{ ...mapStyle }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${title === 'light' ? 'light-v10' : 'dark-v10'}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_TOKEN}`} />
        {MarkDown}
      </Map>
      <Location
        className="locationMap"
      >
        <p>{
          Title ? Title
            :
            'Clique no mapa para adicionar a localização'}
        </p>
      </Location>
    </Container>
  );
};

export default MapMarker;
