import React from 'react';
import CardMessage from '../../Components/CardMessage';
import Logo from '../../Components/HTMLElements/FormUsers/Logo';
import Form from './Form';
import Container from './styles';

const Register: React.FC = () => (
    <Container>
        <CardMessage status={false} />
        <Form />
        <Logo />
    </Container>
);

export default Register;
