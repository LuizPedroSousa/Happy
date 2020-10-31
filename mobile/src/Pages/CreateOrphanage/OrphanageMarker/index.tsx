import React, { useEffect, useState } from 'react';
import HeaderNavigation from '../../../Components/HeaderNavigation';
import {
  Container,
} from './styles';
import Map from '../../../Components/Map';
import { MapEvent, Marker } from 'react-native-maps';

import markerLightIcon from '../../../Assets/Images/mark_down_map.png';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import NextPage from '../../../Components/NextPage';
import { api } from '../../../Services/api';

interface Position {
  latitude: number;
  longitude: number;
}


const CreateOrphanage: React.FC = () => {
  //States
  const [viewNextButton, setViewNextButton] = useState(false);
  const [position, setPosition] = useState<Position>();
  const [orphanage, setOrphanage] = useState<Position[]>([]);

  const handlePositionMarker = (e: MapEvent) => {
    setPosition(e.nativeEvent.coordinate);
  }

  const navigation = useNavigation();

  const toggleNavigation = () => {
    navigation.navigate('CreateOrphanage/data', { position })
  }

  useEffect(() => {
    setViewNextButton(position !== undefined && true);
  }, [position]);

  useFocusEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanage(res.data.Orphanages)
    });
  });

  return (
    <Container>
      <HeaderNavigation
        title={viewNextButton ? 'Localização realizada' : 'Toque no mapa'}
        exit={true}
      />
      <Map
        onPress={handlePositionMarker}
      >
        {orphanage.map(orp =>
          <Marker
            coordinate={{
              latitude: parseFloat(String(orp.latitude)),
              longitude: parseFloat(String(orp.longitude)),
            }}
            icon={markerLightIcon}
          >

          </Marker>
        )}
        <Marker
          coordinate={{
            latitude: position?.latitude || 0,
            longitude: position?.longitude || 0,
          }}
          icon={markerLightIcon}
        >

        </Marker>
      </Map>
      {viewNextButton && <NextPage onPress={toggleNavigation} />}
    </Container>
  );
};

export default CreateOrphanage;
