import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import {
  Wrapper,
  Popup,
  MarkerName,
  Arrow,
  Footer,
  Title,
  Create,
} from './styles';

import {
  AntDesign
} from '@expo/vector-icons'

import {
  Marker,
  Callout
} from 'react-native-maps';

import Map from '../../Components/Map';

import markerLightIcon from '../../Assets/Images/mark_down_map.png';
import { ThemeContext } from 'styled-components';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { api } from '../../Services/api';

interface Orphanage {
  id: number;
  latitude: string;
  longitude: string;
  name: string;
}

const OrphanageMap: React.FC = () => {
  const navigation = useNavigation();

  //States
  const [orphanage, setOrphanage] = useState<Orphanage[]>([]);

  //Refs
  const fadeAnim = useRef(new Animated.Value(0)).current;

  //Contexts
  const { colors } = useContext(ThemeContext);

  //Others
  const handlePushNavigation = () => {
    navigation.navigate('CreateOrphanage/marker');
  }

  //Animations
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();


  useFocusEffect(() => {
    api.get('/orphanages').then(res => {
      setOrphanage(res.data.Orphanages);
    })
  });

  return (
    <Wrapper>
      <Map>
        {orphanage.map(orp => {
          return (
            <Marker
              key={orp.id}
              icon={markerLightIcon}
              coordinate={{
                latitude: parseFloat(orp.latitude),
                longitude: parseFloat(orp.longitude),
              }}
              calloutAnchor={{
                x: .5,
                y: -.1,
              }}
            >
              <Callout
                style={{ width: 200, height: 60 }}
                tooltip={true}
              >
                <Popup>
                  <MarkerName>
                    {orp.name}
                  </MarkerName>
                  <Arrow
                    as={Animated.View}
                  >
                    <AntDesign
                      name="arrowright"
                      size={12}
                      color={colors.white}
                    />
                  </Arrow>
                </Popup>
              </Callout>
            </Marker>
          );
        })}
      </Map>
      <Footer>
        <Title>
          {orphanage.length} Orfanatos encontrados
        </Title>
        <Create
          onPress={handlePushNavigation}
        >
          <AntDesign
            name="plus"
            size={22}
            color={colors.white}
          />
        </Create>
      </Footer>
    </Wrapper >
  );
};

export default OrphanageMap;
