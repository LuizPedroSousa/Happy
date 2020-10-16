import React from 'react';

import { Container } from './styles';

import {
  IoMdTime
} from 'react-icons/io';

interface visitiCardProps {
  info: string;
  styles?: object;
  icon?: JSX.Element;
  textColor?: string;
}

const VisitCard: React.FC<visitiCardProps> = ({ info, styles, icon, textColor, }) => {
  return (
    <Container
      style={styles}
    >
      <span>
        {
          icon ? icon : <IoMdTime />
        }
      </span>
      <p
        style={textColor ? { color: textColor } : {}}
      >
        {info}
      </p>
    </Container>
  );
};

export default VisitCard;
