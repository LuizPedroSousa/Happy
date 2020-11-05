import React from 'react';
import { TextInputProps } from 'react-native';
import {
  InputBlock,
  Titles,
  Label,
  Description,
  InputContent,
} from './styles';


interface InputProps extends TextInputProps {
  label: string;
  description?: string;
  InputStyle?: object;
  BlockStyle?: object;
}

const Input: React.FC<InputProps> = ({ label, InputStyle, description, BlockStyle, ...rest }) => {

  //States
  return (
    <InputBlock
      style={BlockStyle}
    >
      <Titles>
        <Label>{label}</Label>
        {description && <Description>{description}</Description>}
      </Titles>
      <InputContent
        {...rest}
        style={InputStyle}
      />
    </InputBlock>
  );
};

export default Input;
