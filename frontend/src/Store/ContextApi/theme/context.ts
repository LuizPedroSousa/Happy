import { createContext } from 'react';
import light from '../../../Styles/themes/light';
const ThemeChangeContext = createContext({
    theme: light,
    toggleTheme: () => { },
});

export default ThemeChangeContext;