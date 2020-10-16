import React from 'react';

import {
  Wrapper,
  Legend,
} from './styles';

interface FieldsetProps {
  legend: string;
  className?: string;
}

const Fieldset: React.FC<FieldsetProps> = ({ legend, children, className }) => {
  return (
    <Wrapper
      className={className}
    >
      <Legend>
        {legend}
      </Legend>
      {children}
    </Wrapper>
  );
};

export default Fieldset;
