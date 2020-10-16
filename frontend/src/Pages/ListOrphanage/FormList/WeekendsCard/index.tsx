import React, { useContext } from 'react';
import VisitCard from '../VisitCard';

import {
  BsExclamationCircle
} from 'react-icons/bs';
import { ThemeContext } from 'styled-components';

import WeekendsImg from '../../../../Assets/Images/open_on_weekends.svg'

const WeekendsCard: React.FC = () => {
  //Contexts
  const { colors } = useContext(ThemeContext);

  //Inline Styles
  const WeekendsStyle = {
    background: `url(${WeekendsImg}) center`,
  }
  return (
    <VisitCard
      styles={{ ...WeekendsStyle }}
      icon={<BsExclamationCircle color={colors.inputOutline} />}
      textColor={colors.inputOutline}
      info="Atendemos
      fim de semana"
    />
  );
};

export default WeekendsCard;
