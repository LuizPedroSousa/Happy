import React from 'react';
import { TextInputProps } from 'react-native';
import Input from '../Input';

interface TextAreaProps extends TextInputProps {
  label: string;
  description?: string;
  TextAreaStyle?: object;
}

const TextArea: React.FC<TextAreaProps> = ({ label, TextAreaStyle, description, ...rest }) => {
  return (
    <>
      <Input
        label={label}
        BlockStyle={{ padding: 0 }}
        InputStyle={[TextAreaStyle, { height: 112, padding: 0 }]}
        multiline={true}
        description={description}
        numberOfLines={4}
        maxLength={300}
        {...rest}
      />
    </>
  );
}


export default TextArea;
