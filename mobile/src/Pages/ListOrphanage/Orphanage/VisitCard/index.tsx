import React, { useContext } from 'react';
import { lighten } from 'polished';

import {
  Container,
  Title,
  OpeningHours,
  OpenOnWeekends,
} from './styles';
import { ThemeContext } from 'styled-components';

import VisitImage from '../../../../Assets/Images/background_visit_card.png';
import OpenImage from '../../../../Assets/Images/background_open_on_weekends.png';
import DontOpenImage from '../../../../Assets/Images/background_dont_open_on_weekends.png';

import { AntDesign, Feather } from '@expo/vector-icons';

interface VisitProps {
  title: string;
  openOnWeeekends: boolean;
}

const VisitCard: React.FC<VisitProps> = ({ title, openOnWeeekends }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <OpeningHours
        source={VisitImage}
        resizeMode='cover'
      >
        <AntDesign
          name='clockcircleo'
          color={colors.primary}
          size={33}
        />
        <Title>{title}</Title>
      </OpeningHours>
      <OpenOnWeekends
        style={!openOnWeeekends && { borderColor: colors.alert }}
        source={openOnWeeekends ? OpenImage : DontOpenImage}
        resizeMode='cover'
      >
        <Feather
          name='alert-circle'
          size={33}
          color={openOnWeeekends ? lighten(0.2, colors.buttonPrimary) : colors.alert}
        />
        <Title
          style={!openOnWeeekends && { color: colors.alert }}
        >
          {openOnWeeekends ? 'Atendemos fim de semana' : 'Não atendemos fim de semana'}
        </Title>
      </OpenOnWeekends>
    </Container>
  );
};

export default VisitCard;
