import React, { useContext, useRef } from 'react';
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

import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout
} from 'react-native-maps';

import markerLightIcon from '../../Assets/Images/mark_down_map.png';
import { ThemeContext } from 'styled-components';

const OrphanageMap: React.FC = () => {
  //Refs
  const fadeAnim = useRef(new Animated.Value(0)).current;

  //Contexts
  const { colors } = useContext(ThemeContext);

  //InlineStyles
  const mapStyle = {
    width: '100%',
    height: '100%',
  }

  //Utils
  const initialRegion = {
    latitude: -23.457960,
    longitude: -46.682786,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  //Animations
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  return (
    <Wrapper>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{ ...initialRegion }}
        style={{ ...mapStyle }}
      >
        <Marker
          icon={markerLightIcon}
          coordinate={{
            latitude: -23.457960,
            longitude: -46.682786,
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
                Orf. Jardim Eliza
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
      </MapView>
      <Footer>
        <Title>
          2 Orfanatos encontrados
        </Title>
        <Create>
          <AntDesign
            name="plus"
            size={22}
            color={colors.white}
          />
        </Create>
      </Footer>
    </Wrapper>
  );
};

export default OrphanageMap;
