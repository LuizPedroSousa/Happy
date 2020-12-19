import React, { useContext } from 'react';
import CardMessage from '../../../Components/CardMessage';
import Logo from '../../../Components/HTMLElements/FormUsers/Logo';
import LoginContext from '../../../Store/ContextApi/Login/context';
import Form from '../Form';

import { Container } from './styles';

const LoginContent: React.FC = () => {
    const { status } = useContext(LoginContext);
    return (
        <Container>
            <CardMessage status={status} />
            <Logo />
            <Form />
        </Container>
    );
};

export default LoginContent;
