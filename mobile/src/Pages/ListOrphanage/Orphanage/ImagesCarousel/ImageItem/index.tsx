import React from 'react';
import { Dimensions, Text } from 'react-native';

import {
  Image,
} from './styles';

interface IItem {
  item: {
    url: string;
  }
  index: number;
}

const ImageItem: React.FC<IItem> = ({ item, index }) => {

  return (
    <Image resizeMode={"stretch"} source={{ uri: item.url }} >

    </Image>
  );
};

export default ImageItem;
