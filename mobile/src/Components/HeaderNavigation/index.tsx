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
  exit: boolean;
}

const HeaderNavigation: React.FC<HeaderProps> = ({ title, exit }) => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);
  return (
    <Wrapper>
      <PushBack
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
          onPress={() => navigation.navigate('OrphanageMap')}
        >
          <Feather
            name='x'
            size={25}
            color={colors.textComplement}
          />
        </ExitPage>
      }
    </Wrapper>
  );
};

export default HeaderNavigation;
