import React, { HTMLAttributes } from 'react';

import {
  Content,
  Submit,
} from './styles';

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  buttonName: string;
  icon?: JSX.Element;
}

const Form: React.FC<FormProps> = ({ children, icon, buttonName, ...rest }) => {
  return (
    <Content {...rest}>
      {children}
      <Submit
      >
        {icon}
        {buttonName}
      </Submit>
    </Content>
  );
};

export default Form;
