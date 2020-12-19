import React, { useState } from 'react';

import LoginContext from './context';

const { Provider, Consumer } = LoginContext;

const LoginProvider: React.FC = ({ children }) => {
    const [status, setStatusAction] = useState(false);

    const setStatus = (value: boolean) => setStatusAction(value);
    return (
        <Provider value={{
            status,
            setStatus,
        }}
        >
            {children}
        </Provider>
    );
};

export { LoginProvider as Provider, Consumer };
