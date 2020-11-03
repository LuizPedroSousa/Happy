import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import {
  Wrapper,
  Title,
  PushBack,
  ExitPage,
} from './styles';
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
  title: string;
  exit?: boolean;
}

const HeaderNavigation: React.FC<HeaderProps> = ({ title, exit }) => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const handleExitNavigation = () => {
    navigation.navigate('CreateOrphanage/Cancel');
  }

  return (
    <Wrapper
      style={!exit && { justifyContent: 'flex-start' }}
    >
      <PushBack
        style={!exit && { marginRight: '20%' }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign
          size={25}
          name="arrowleft"
          color={colors.primary}
        />
      </PushBack>
      <Title>
        {title}
      </Title>
      {exit &&
        <ExitPage
          onPress={handleExitNavigation}
        >

          <Feather
            name='x'
            size={25}
            color={colors.alert}
          />
        </ExitPage>
      }
    </Wrapper>
  );
};

export default HeaderNavigation;
