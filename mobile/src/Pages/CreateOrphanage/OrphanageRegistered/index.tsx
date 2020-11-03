import React, { useEffect } from 'react';

import {
  Container,
  Hero,
  Title,
  Description,
  FinishButton,
  FinishText,
} from './styles';

import heroImage from '../../../Assets/Images/registered_hero.png';
import { setStatusBarStyle } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const OrphanageRegistered: React.FC = () => {
  const navigation = useNavigation();
  
  const handleNavigate = () => {
    navigation.navigate('OrphanageMap');
  }

  useEffect(() => {
    setStatusBarStyle('light');
  }, [])
  return (
    <Container>
      <Hero source={heroImage} />
      <Title>
        Ebaaa!
      </Title>
      <Description>
        O cadastro deu certo e foi
        enviado ao administrador para ser
        aprovado. Agora é só esperar :)
      </Description>
      <FinishButton
        onPress={handleNavigate}
      >
        <FinishText>Ok</FinishText>
      </FinishButton>
    </Container>
  );
};

export default OrphanageRegistered;
