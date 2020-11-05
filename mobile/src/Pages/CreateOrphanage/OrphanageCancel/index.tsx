import React, { useContext } from 'react';

import {
  Container,
  Span,
  Title,
  Description,
  ButtonsContainer,
  ButtonBorder,
  DontCancel,
  ButtonText,
  Cancel,
} from './styles';

import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const OrphanageCancel: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);
  const handleNavigate = () => {
    navigation.navigate('OrphanageMap');
  }

  const handleExitNavigation = () => {
    navigation.goBack();
  }

  const SpanAnim = Animatable.createAnimatableComponent(Span);
  const TitleAnim = Animatable.createAnimatableComponent(Title);
  const DescriptionAnim = Animatable.createAnimatableComponent(Description);
  return (
    <Container>
      <SpanAnim
        animation={'fadeInDown'}
        duration={2000}
        useNativeDriver
      >
        <Feather
          name='x'
          size={30}
          color={colors.alert}
        />
      </SpanAnim>
      <TitleAnim
        animation={'fadeInRight'}
        duration={2000}
        useNativeDriver
      >
        Cancelar cadastro
      </TitleAnim>
      <DescriptionAnim
        animation={'fadeInLeft'}
        duration={2000}
        useNativeDriver
      >
        Tem certeza que quer
        cancelar esse cadastro?
      </DescriptionAnim>
      <ButtonsContainer>
        <ButtonBorder>
          <DontCancel
            onPress={handleExitNavigation}
          >
            <ButtonText>Não</ButtonText>
          </DontCancel>
        </ButtonBorder>
        <Cancel
          onPress={handleNavigate}
        >
          <ButtonText>Sim</ButtonText>
        </Cancel>
      </ButtonsContainer>
    </Container>
  );
};

export default OrphanageCancel;
