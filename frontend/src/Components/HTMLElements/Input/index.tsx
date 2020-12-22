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
  InputBlockRender?: any;
  status?:boolean;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({
    label,
    children,
    isValid,
    inputValue,
    status,
    InputBlockRender,
    errors,
    ...rest
}, ref) => (
    <InputBlock
        as={InputBlockRender && InputBlockRender}
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
