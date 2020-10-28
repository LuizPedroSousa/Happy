import React, { useState } from 'react';
import { dark } from '../../../Styles/themes/dark';
import { light } from '../../../Styles/themes/light';
import ThemeColorsContext from './context';


const ThemeColorsProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <ThemeColorsContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeColorsContext.Provider>
    );
}

export default ThemeColorsProvider;