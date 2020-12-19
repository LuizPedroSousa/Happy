import React from 'react';

import {
    Container,
    Ilustration,
    TipText,
} from './styles';

interface ITip{
  tip: string;
  img: any;
}

const Tip: React.FC<ITip> = ({ tip, img }) => (
    <Container>
        <Ilustration src={img} />
        <TipText>
            {tip}
        </TipText>
    </Container>
);

export default Tip;
