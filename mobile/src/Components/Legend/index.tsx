import React from 'react';

import {
  Container,
  Title,
} from './styles';

interface LegendProps {
  title: string;
  blockStyle?: object;
}

const Legend: React.FC<LegendProps> = ({ title, blockStyle, children }) => {
  return (
    <Container
      style={blockStyle}
    >
      <Title>
        {title}
      </Title>
      {children}
    </Container>
  );
};

export default Legend;
