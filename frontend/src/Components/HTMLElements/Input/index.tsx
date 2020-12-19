import React, {
    forwardRef,
    InputHTMLAttributes,
} from 'react';

import { InputBlock, InputText } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isValid?: boolean;
  inputValue?:string;
  errors?:string;
  status?:boolean;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({
    label,
    children,
    isValid,
    inputValue,
    status,
    errors,
    ...rest
}, ref) => (
    <InputBlock
        className="InputBlock"
    >
        <div>
            <label htmlFor={label}>{label}</label>
            <span>
                {errors}
            </span>
        </div>
        <InputText
            {...rest}
            id={label}
            hasValidation={!!isValid}
            hasStatus={status}
            ref={ref}
            hasValue={inputValue || ''}
        />
        {children}
    </InputBlock>
);

export default forwardRef(Input);
