import React from 'react';

import {
  Container,
  Title,
} from './styles';

interface LegendProps {
  title: string;
}

const Legend: React.FC<LegendProps> = ({ title}) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  );
};

export default Legend;
