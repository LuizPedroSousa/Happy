import React from 'react';

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
    <>
      <Image
        resizeMode={"stretch"}
        source={{ uri: item.url }}
      />
    </>
  );
};

export default ImageItem;
