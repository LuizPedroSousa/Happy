import React, { useContext, useEffect, useState } from 'react';

import {
  Container,
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

import markerLightIcon from '../../Assets/Images/mark_down_map.svg';
import markerDarkIcon from '../../Assets/Images/mark_down_map_dark.svg';
import Leaflet from 'leaflet';
import api from '../../Services/api';
interface Orphanages {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanages[]>([]);
  //Contexts
  const { title } = useContext(ThemeContext);

  //InlineStyles
  const mapStyle = {
    width: '100%',
    height: '100%',
  }

  //Effects
  useEffect(() => {
    api.get('/orphanages').then(res => {
      setOrphanages([...res.data.Orphanages]);
    });
  }, []);

  //Utils
  const iconMarker = Leaflet.icon({
    iconUrl: title === 'light' ? markerLightIcon : markerDarkIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [130, 2],
  });
  return (
    <Container>
      <Aside />
      <Link to='/createOrphanage' className={'create-orp'}>
        <span>
          <AiOutlinePlus />
        </span>
      </Link>
      <Map
        center={[-23.4579916, -46.6827333]}
        zoom={75}
        style={{ ...mapStyle }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${title === 'light' ? 'light-v10' : 'dark-v10'}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_TOKEN}`} />
        {orphanages.map(orp => {
          return (
            <Marker
              key={orp.id}
              position={[orp.latitude, orp.longitude]}
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
                {orp.name}
                <Link to={`/listOrphanage/${orp.id}`}>
                  <span>
                    <BsArrowRightShort />
                  </span>
                </Link>
              </Popup>
            </Marker>
          );
        })
        }
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
