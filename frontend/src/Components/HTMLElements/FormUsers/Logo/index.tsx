import React from 'react';
import happyImg from '../../../../Assets/Images/logoLogin.svg';
import { Container, Content } from './styles';

const Logo: React.FC = () => (
    <Container>
        <Content>
            <img src={happyImg} alt="Happy" />
            <strong>
            São Paulo
            </strong>
            <p>ZN</p>
        </Content>
    </Container>
);

export default Logo;
