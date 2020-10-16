import React, { forwardRef, InputHTMLAttributes, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({ label, ...rest }, ref) => {
  //States
  const [inputValue, setInputValue] = useState('');

  //Contexts
  const { colors } = useContext(ThemeContext);
  const InputStyle = {
    border: `1px solid ${colors.inputOutline}`
  }
  return (
    <InputBlock
      className="InputBlock"
    >
      <label htmlFor={label}>{label}</label>
      <input
        {...rest}
        style={inputValue !== '' ? { ...InputStyle } : {}}
        id={label}
        onChange={e => setInputValue(e.target.value)}
        ref={ref}
      />
    </InputBlock>
  );
};

export default forwardRef(Input);
