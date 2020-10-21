import React, { forwardRef, InputHTMLAttributes } from 'react';

import {
  ImageBlock,
  SelectImg,
} from './styles';

import { BsPlus } from 'react-icons/bs';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const InputImage: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {

  return (
    <ImageBlock>

      <SelectImg htmlFor={name}>
        <span>
          <BsPlus />
        </span>
      </SelectImg>
      <input
        multiple
        id={name}
        type="file"
        {...rest}
        ref={ref}
      />
    </ImageBlock>
  );
};

export default forwardRef(InputImage);
