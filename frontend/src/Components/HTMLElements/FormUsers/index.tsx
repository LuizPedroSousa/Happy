import React, { FormHTMLAttributes } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { useHistory } from 'react-router-dom';
import {
    Container,
    Exit,
    Button,
    ButtonContainer,
} from './styles';

interface IFormUsers extends FormHTMLAttributes<HTMLFormElement>{
  title: string;
  buttonName: string;
  footer?: () => (JSX.Element);
  exitPath: string;
  isValid: boolean;
}

const FormUsers: React.FC<IFormUsers> = ({
    title,
    buttonName,
    isValid,
    footer,
    exitPath,
    children,
    ...rest
}) => {
    // Others Hoocks
    const history = useHistory();

    // Handles && Toggles
    const HandleExit = () => history.push(exitPath);
    return (
        <Container
            className="FormContainer"
            {...rest}
            hasFooter={!!footer}
        >
            <Exit
                type="button"
                className="ExitButton"
                onClick={HandleExit}
            >
                <span>
                    <AiOutlineArrowLeft />
                </span>
            </Exit>
            <strong>{title}</strong>
            {children}
            <ButtonContainer
                className="ButtonContainer"
            >
                <Button
                    hasValid={isValid}
                    type="submit"
                >
                    {buttonName}
                </Button>
            </ButtonContainer>
            {footer && footer()}
        </Container>
    );
};

export default FormUsers;
