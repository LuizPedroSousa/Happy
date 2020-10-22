import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import GlobalStyle from './Styles/global';
import ThemeContext from './Store/ContextApi/theme/context';
import ThemeChangeProvider from './Store/ContextApi/theme/provider';
function App() {
  return (
    <ThemeChangeProvider>
      <ThemeContext.Consumer>
        {theme =>
          <ThemeProvider
            theme={theme.theme}
          >
            <GlobalStyle />
            <Routers />
          </ThemeProvider>}
      </ThemeContext.Consumer>
    </ThemeChangeProvider>
  );
}

export default App;
