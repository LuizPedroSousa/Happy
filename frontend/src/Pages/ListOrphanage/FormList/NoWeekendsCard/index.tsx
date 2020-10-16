import React, { useContext } from 'react';
import VisitCard from '../VisitCard';

import {
  BsExclamationCircle
} from 'react-icons/bs';
import { ThemeContext } from 'styled-components';

import NoWeekendsImg from '../../../../Assets/Images/no_open_on_weekends.svg'

const NoWeekendsCard: React.FC = () => {
  //Contexts
  const { colors } = useContext(ThemeContext);

  //Inline Styles
  const WeekendsStyle = {
    background: `url(${NoWeekendsImg}) center`,
  }
  return (
    <VisitCard
      styles={{ ...WeekendsStyle }}
      icon={<BsExclamationCircle color={colors.alert} />}
      textColor={colors.alert}
      info="Não Atendemos
      fim de semana"
    />
  );
};

export default NoWeekendsCard;
