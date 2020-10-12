import { createContext } from 'react';
import light from '../../../Styles/themes/light';
const ThemeContext = createContext({
    theme: light,
    toggleTheme: () => {},
});

export default ThemeContext;