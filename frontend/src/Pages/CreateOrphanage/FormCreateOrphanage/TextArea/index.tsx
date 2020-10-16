import React, { forwardRef, HTMLAttributes } from 'react';

import { TextAreaBlock} from './styles';

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  description?: string;
}

const TextArea: React.RefForwardingComponent<HTMLTextAreaElement, TextAreaProps> = ({ description, label, ...rest }, ref) => {
  return (
    <TextAreaBlock
      className="TextareaBlock"
    >
      <label htmlFor={label}>
        <strong>{label}</strong>
        <p>{description}</p>
      </label>
      <textarea
        id={label}
        ref={ref}
        {...rest}
      ></textarea>
    </TextAreaBlock>
  );
};

export default forwardRef(TextArea);
