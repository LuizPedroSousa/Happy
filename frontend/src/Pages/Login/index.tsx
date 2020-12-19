import React from 'react';
import { Provider, Consumer } from '../../Store/ContextApi/Login/provider';
import LoginContent from './LoginContent';

const Login: React.FC = () => (
    <Provider>
        <Consumer>
            {() => <LoginContent />}
        </Consumer>
    </Provider>
);

export default Login;
