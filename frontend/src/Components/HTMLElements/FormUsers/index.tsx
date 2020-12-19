import React, { FormHTMLAttributes } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Container, Exit, Button } from './styles';

interface IFormUsers extends FormHTMLAttributes<HTMLFormElement>{
  title: string;
  buttonName: string;
  footer?: () => (JSX.Element);
}

const FormUsers: React.FC<IFormUsers> = ({
    title, buttonName, footer, children, ...rest
}) => (
    <Container
        {...rest}
        hasFooter={!!footer}
    >
        <Exit to="/">
            <span>
                <AiOutlineArrowLeft />
            </span>
        </Exit>
        <strong>{title}</strong>
        {children}
        <Button
            typeof="submit"
        >
            {buttonName}
        </Button>
        {footer && footer()}
    </Container>
);

export default FormUsers;
