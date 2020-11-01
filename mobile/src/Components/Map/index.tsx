import React from 'react';
import MapView, { MapViewProps, PROVIDER_GOOGLE } from 'react-native-maps';
import { initialRegion } from '../../Utils/initialRegion';

const Map: React.FC<MapViewProps> = ({ children, ...rest }) => {
  //InlineStyles
  const mapStyle = {
    width: '100%',
    height: '100%',
  }
  
  return (
    <MapView
      {...rest}
      provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      style={{ ...mapStyle }}
    >
      {children}
    </MapView>
  );
}

export default Map;
