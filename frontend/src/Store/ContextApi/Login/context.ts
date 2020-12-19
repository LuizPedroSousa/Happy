import { createContext } from 'react';

interface ILoginContext{
  status: boolean;
  setStatus: (value: boolean) => void;
}

const LoginContext = createContext<ILoginContext>({
    status: false,
    setStatus: () => {},
});

export default LoginContext;
