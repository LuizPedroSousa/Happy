import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Index,
  LegendContent,
  PageIndex,
  Title,
} from './styles';

interface LegendProps {
  title: string;
  blockStyle?: object;
  index?: number;
}

const Legend: React.FC<LegendProps> = ({ title, blockStyle, index, children }) => {
  const { colors } = useContext(ThemeContext);

  const indexStyle = {
    color: colors.textComplementDark,
    fontFamily: 'ExtraBold',
  }
  return (
    <Container
      style={blockStyle}
    >
      <LegendContent>
        <Title>
          {title}
        </Title>
        {
          index
          &&
          <PageIndex >
            <Index
              style={index === 1 && indexStyle}
            >
              01
          </Index>
            <Index>
              -
          </Index>
            <Index
              style={index === 2 && indexStyle}
            >
              02
          </Index>
          </PageIndex>}
      </LegendContent>
      {children}
    </Container>
  );
};

export default Legend;
