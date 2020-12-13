import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import GlobalStyle from './Styles/global';
import { ThemeChangeProvider, Consumer } from './Store/ContextApi/theme/provider';

function App() {
    return (
        <ThemeChangeProvider>
            <Consumer>
                {theme => (
                    <ThemeProvider
                        theme={theme.theme}
                    >
                        <GlobalStyle />
                        <Routers />
                    </ThemeProvider>
                )}
            </Consumer>
        </ThemeChangeProvider>
    );
}

export default App;
