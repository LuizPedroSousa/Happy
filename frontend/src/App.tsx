import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import GlobalStyle from './Styles/global';
import ThemeContext from './Store/ContextApi/theme/context';
function App() {
  return (
    <>
      <ThemeContext.Consumer>
        {theme =>
          <ThemeProvider
            theme={theme.theme}
          >
          <GlobalStyle />
          <Routers />
        </ThemeProvider>}
      </ThemeContext.Consumer>
    </>
  );
}

export default App;
