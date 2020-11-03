import React, { useEffect, useState } from 'react';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { IParams } from '../../Orphanage';

import {
  Container,
  MapContent,
  Map,
  ShowRoutes,
  Title,
} from './styles';
import { api } from '../../../../Services/api';
import { LatLng, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import MarkerLightIcon from '../../../../Assets/Images/mark_down_map.png';
import { Linking } from 'react-native';

interface IOrphanageLocation {
  latitude: string,
  longitude: string,
}




const ListMap: React.FC = () => {
  //States
  const [orphanage, setOrphanage] = useState<IOrphanageLocation>({
    latitude: '-23.457960',
    longitude: '-46.682786',
  });

  //Toggles
  const handleOpenGoogleMapsRoute = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`)
  }

  //Utils
  const route = useRoute();
  const params = route.params as IParams;

  const coordinate: LatLng = {
    latitude: parseFloat(orphanage?.latitude),
    longitude: parseFloat(orphanage?.longitude),
  }

  //Effects
  useEffect(() => {
    const { id } = params;
    api.get(`orphanages/show/${id}`)
      .then(res => {
        setOrphanage(res.data.orphanage);
      });

  }, [params]);
  let initialRegion: Region = {
    latitude: parseFloat(orphanage.latitude),
    longitude: parseFloat(orphanage.longitude),
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  return (
    <Container>
      <MapContent>
        <Map
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          rotateEnabled={false}
          zoomEnabled={false}
          zoomTapEnabled={false}
          scrollEnabled={false}
        >
          <Marker
            coordinate={coordinate}
            icon={MarkerLightIcon}
          >

          </Marker>

        </Map>
      </MapContent>

      <ShowRoutes
        onPress={handleOpenGoogleMapsRoute}
      >
        <Title>
          Ver rotas no Google Maps
        </Title>
      </ShowRoutes>
    </Container>
  );
};

export default ListMap;
