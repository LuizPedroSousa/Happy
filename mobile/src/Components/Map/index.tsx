import React from 'react';
import MapView, { MapViewProps, PROVIDER_GOOGLE } from 'react-native-maps';

const Map: React.FC<MapViewProps> = ({ children, ...rest }) => {
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

  return (
    <MapView
      {...rest}
      provider={PROVIDER_GOOGLE}
      initialRegion={{ ...initialRegion }}
      style={{ ...mapStyle }}
    >
      {children}
    </MapView>
  );
}

export default Map;
