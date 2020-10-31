import React, { useContext } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import {
  ImageBlock,
  Label,
  PickerButton,
} from './styles';
import { ThemeContext } from 'styled-components';

interface PickerProps {
  label: string;
  pressEvent?: () => void;
}

const ImagePicker: React.FC<PickerProps> = ({ label, pressEvent }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ImageBlock>
      <Label>{label}</Label>
      <PickerButton
        onPress={pressEvent}
      >
        <AntDesign
          name='plus'
          size={20}
          color={colors.primary}
        />
      </PickerButton>
    </ImageBlock >
  );
};

export default ImagePicker;
