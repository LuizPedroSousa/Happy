import React, { useState } from 'react';
import { viewThemesContext } from './context';

const { Provider, Consumer } = viewThemesContext;
const ViewThemesProvider: React.FC = ({ children }) => {
  const [viewThemes, setThemesAction] = useState(false);
  const setViewThemes = (value: boolean) => {
    setThemesAction(value);
  }
  return (
    <Provider
      value={{
        viewThemes,
        setViewThemes,
      }}
    >
      {children}
    </Provider>
  );
}

export { ViewThemesProvider, Consumer };
