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

import * as Animatable from 'react-native-animatable';

const OrphanageRegistered: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('OrphanageMap');
  }


  const HeroAnim = Animatable.createAnimatableComponent(Hero);
  const TitleAnim = Animatable.createAnimatableComponent(Title);
  const DescriptionAnim = Animatable.createAnimatableComponent(Description);
  const FinishButtonAnim = Animatable.createAnimatableComponent(FinishButton);

  const heroAnim = {
    0: {
      transform: [{ translateY: 0 }],
    },
    0.5: {
      transform: [{ translateY: 10 }],
    },
    1: {
      transform: [{ translateY: 0 }],
    },
  }

  return (
    <Container>
      <HeroAnim
        animation={heroAnim}
        useNativeDriver
        duration={3000}
        iterationCount='infinite'
        source={heroImage}
      />
      <TitleAnim
        animation={'fadeIn'}
        duration={2000}
        useNativeDriver
      >
        Ebaaa!
      </TitleAnim>
      <DescriptionAnim
        animation={'fadeIn'}
        duration={2000}
        useNativeDriver

      >
        O cadastro deu certo e foi
        enviado ao administrador para ser
        aprovado. Agora é só esperar :)
      </DescriptionAnim>
      <FinishButtonAnim
        onPress={handleNavigate}
        animation={'fadeIn'}
        duration={2000}
        useNativeDriver
      >
        <FinishText>Ok</FinishText>
      </FinishButtonAnim>
    </Container>
  );
};

export default OrphanageRegistered;
