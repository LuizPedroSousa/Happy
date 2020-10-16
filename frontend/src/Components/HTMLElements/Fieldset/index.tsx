import React from 'react';

import {
  Wrapper,
  Legend,
} from './styles';

interface FieldsetProps {
  legend: string;
}

const Fieldset: React.FC<FieldsetProps> = ({ legend }) => {
  return (
    <Wrapper>
      <Legend>
        {legend}
      </Legend>
    </Wrapper>
  );
};

export default Fieldset;
