import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import BackgroundLightPicker from '../../../../../Assets/Images/background_imagepicker.png'

import {
  ImageBlock,
  Content,
  Image,
  Name,
  Icon,
} from './styles';

interface ImageProps {
  name: string;
  image: string;
  ExitEvent?: () => void;
}

const OrphanageImage: React.FC<ImageProps> = ({ name, image, ExitEvent }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ImageBlock
      source={BackgroundLightPicker}
    >
      <Content>
        <Image
          resizeMode={"cover"}
          source={{ uri: `${image}` }}
        />
        <Name
          numberOfLines={1}
        >
          {name}
        </Name>
      </Content>
      <Icon
        onPress={ExitEvent}
      >
        <Feather
          name='x'
          size={20}
          color={colors.alert}
        />
      </Icon>
    </ImageBlock>
  );
};

export default OrphanageImage;
