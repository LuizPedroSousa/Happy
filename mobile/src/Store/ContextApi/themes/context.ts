import { createContext } from 'react';
import { light } from './../../../Styles/themes/light';

const ThemeColorsContext = createContext({
    theme: light,
    toggleTheme: () => { },
});

export default ThemeColorsContext