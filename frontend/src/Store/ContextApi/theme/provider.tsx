import React, { useState } from 'react';
import dark from '../../../Styles/themes/dark';
import light from '../../../Styles/themes/light';
import ThemeContext from './context';

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(light.title === 'light' ? dark : light);
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