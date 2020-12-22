import React from 'react';
import { useHistory } from 'react-router-dom';
import Success from '../Success';

import ContainerFail from './styles';

import failImg from '../../Assets/Images/fail.svg';

const RegisterFail: React.FC = () => {
    // Others Hoocks
    const history = useHistory();

    // Handles && Toggles
    const handlePushToRegister = () => {
        history.push('/register');
    };
    return (
        <>
            <Success
                buttonClickAction={handlePushToRegister}
                ContainerRender={ContainerFail}
                title="Ops..."
                description="Parece que houve uma falha ao realizar o cadastro, tente novamente mais tarde"
                buttonName="Voltar para o cadastro"
                img={failImg}
            />
        </>
    );
};

export default RegisterFail;
