import React from 'react';
import { DefaultTheme } from 'styled-components';
import dark from '../../../Styles/themes/dark';
import light from '../../../Styles/themes/light';
import usePersistedState from '../../Utils/usePersistedState';
import ThemeChangeContext from './context';

const { Consumer, Provider } = ThemeChangeContext;
const ThemeChangeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('happyTheme', light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }
    return (
        <Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </Provider>
    );
}

export { ThemeChangeProvider, Consumer };