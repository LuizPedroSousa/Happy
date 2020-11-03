import React, { useContext } from 'react';
import * as Animatable from 'react-native-animatable';

import {
  Container,
  FirstImage,
  FirstSubtitle,
  FirstTitle,
  SecondImage,
  SecondTitle,
  Next,
  DotLight,
  DotSelected,
  DotContent,
} from './styles';

import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import OnBoardingScreens, { Page } from 'react-native-onboarding-swiper';
import onBoardingFirstImage from '../../Assets/Images/first_onboarding_page.png';
import onBoardingSecondImage from '../../Assets/Images/second_onboarding_page.png';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

const OnBoarding: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const navigation = useNavigation();

  const FirstTitleAnim = Animatable.createAnimatableComponent(FirstTitle);
  const FirstImageAnim = Animatable.createAnimatableComponent(FirstImage);
  const SubtitleAnim = Animatable.createAnimatableComponent(FirstSubtitle);
  const NextButtonAnim = Animatable.createAnimatableComponent(Next);
  const DotsSelectedAnim = Animatable.createAnimatableComponent(DotSelected);
  const DotLightAnim = Animatable.createAnimatableComponent(DotLight);
  const SecondImageAnim = Animatable.createAnimatableComponent(SecondImage);

  const handleDoneOnBoarding = async () => {
    await AsyncStorage.setItem('onBoarding', 'true');
    navigation.navigate('OrphanageMap');
  }

  //Animations
  const ImageAnim = {
    0: {
      transform: [{ translateY: 0 }],

    },
    0.3: {
      transform: [{ translateY: 5 }],

    },
    0.5: {
      transform: [{ translateY: 20 }]
    },
    1: {
      transform: [{ translateY: 0 }],
    },
  }

  const titleAnim = {
    0: {
      opacity: 0,
      scale: 0.3,
      transform: [{ translateX: -600 }],
    },
    0.5: {
      opacity: 0.5,
      scale: 1,
      transform: [{ translateX: -25 }],
    },
    0.8: {
      opacity: 1,
      scale: 1,
      transform: [{ translateX: -1 }],
    },
    0.9: {
      opacity: 1,
      scale: 0.95,
      transform: [{ translateX: 0 }],
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  }

  const subtitleAnim = {
    ...titleAnim,
    0: {
      opacity: 0,
      scale: 0.3,
      transform: [{ translateX: 600 }],
    },
  }

  const nextAnim = {
    0: {
      opacity: 0.3,
      scale: 0.3,
      transform: [{ rotateZ: '-180deg' }]
    },
    0.5: {
      opacity: 0.5,
      scale: 0.5,
      transform: [{ rotateZ: '180deg' }]

    },
    0.8: {
      opacity: 0.8,
      scale: 0.9,
    },
    0.9: {
      opacity: 0.8,
      scale: 0.85,
    },
    1: {
      opacity: 1,
      scale: 1,
      transform: [{ rotateZ: '360deg' }]
    },
  }


  //Pages
  const firstScreen: Page = {
    backgroundColor: colors.onBoardingBackground,
    image: <FirstImageAnim
      animation={ImageAnim}
      duration={6000}
      iterationCount='infinite'
      useNativeDriver
      resizeMode='contain'
      source={onBoardingFirstImage}
    />,
    title: <FirstTitleAnim
      animation={titleAnim}
      duration={3000}
      useNativeDriver
    >
      Leve felicidade para o mundo
    </FirstTitleAnim>,
    subtitle:
      <SubtitleAnim
        animation={subtitleAnim}
        duration={3000}
        useNativeDriver
      >
        Visite orfanatos e mude o dia de muitas crianças
    </SubtitleAnim>,
  }

  const secondScreen: Page = {
    backgroundColor: colors.onBoardingBackground,
    image: <SecondImageAnim
      resizeMode='contain'
      animation={ImageAnim}
      duration={3000}
      iterationCount='infinite'
      useNativeDriver
      source={onBoardingSecondImage}
    />,
    title:
      <SecondTitle
      >
        Escolha um orfanato no mapa e faça uma visita
    </SecondTitle>,
    subtitle: '',
  }


  return (
    <Container>
      <OnBoardingScreens
        containerStyles={{ justifyContent: 'center' }}
        bottomBarColor={colors.onBoardingBackground}
        imageContainerStyles={{ paddingBottom: 20 }}
        DotComponent={(dot) =>
          <DotContent
          >
            {dot.selected && <DotLightAnim
              animation={nextAnim}
              duration={1000}
              useNativeDriver
            />}
            {!dot.selected && <DotsSelectedAnim
              animation={nextAnim}
              duration={1000}
              useNativeDriver
            />}
          </DotContent>
        }
        DoneButtonComponent={() =>
          <Next
            onPress={handleDoneOnBoarding}
          >
            <AntDesign
              name='arrowright'
              size={25}
              color={colors.primary}
            />
          </Next>
        }
        NextButtonComponent={(next) =>
          <NextButtonAnim
            animation={nextAnim}
            duration={2000}
            useNativeDriver
            onPress={next.onPress}
          >
            <AntDesign
              name='arrowright'
              size={25}
              color={colors.primary}
            />
          </NextButtonAnim>
        }
        showSkip={false}
        pages={[firstScreen, secondScreen]}
      />
    </Container>
  );
};

export default OnBoarding;