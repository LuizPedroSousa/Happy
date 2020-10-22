import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import dark from '../../../Styles/themes/dark';
import light from '../../../Styles/themes/light';
import usePersistedState from '../../Utils/usePersistedState';
import ThemeContext from './context';

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('happyTheme',light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;