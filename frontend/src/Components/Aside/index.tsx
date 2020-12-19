import React from 'react';

import Wrapper from './styles';

const Aside: React.FC = ({ children }) => (
    <Wrapper
        className="aside"
    >
        {children}
    </Wrapper>
);

export default Aside;
