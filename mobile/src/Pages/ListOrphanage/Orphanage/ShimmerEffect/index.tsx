import React from 'react';
import {
  Container,
  ShimmerView,
  Content,
  ShimmerTitle,
  ShimmerText,
  ShimmerMap,
  ShimmerViewRoute,
  Cards,
  ShimmerCard,
  ShimmerButton,
} from './styles';


const ShimmerEffect: React.FC = () => {
  return (
    <Container>
      <ShimmerView />
      <Content>
        <ShimmerTitle />
        <ShimmerText />
        <ShimmerText style={{ width: '60%' }} />
        <ShimmerText style={{ width: '80%' }} />
        <ShimmerMap />
        <ShimmerViewRoute />
        <ShimmerTitle />
        <ShimmerText />
        <ShimmerText style={{ width: '60%' }} />
        <ShimmerText style={{ width: '50%' }} />
        <Cards>
          <ShimmerCard />
          <ShimmerCard />
        </Cards>
        <ShimmerButton />
      </Content>
    </Container >
  );
};

export default ShimmerEffect;
