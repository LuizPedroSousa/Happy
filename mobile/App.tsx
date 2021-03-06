import React, { useEffect } from 'react';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import Routers from './src/Routers';

import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import { AppLoading } from 'expo';
import ThemeColorsContext from './src/Store/ContextApi/themes/context';
import ThemeColorsProvider from './src/Store/ContextApi/themes/provider';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: Nunito_400Regular,
    SemiBold: Nunito_600SemiBold,
    Bold: Nunito_700Bold,
    ExtraBold: Nunito_800ExtraBold,
  });

  if (!fontsLoaded)
    return <AppLoading />
  return (
    <ThemeColorsProvider>
      <ThemeColorsContext.Consumer>
        {theme =>
          <ThemeProvider
            theme={theme.theme}
          >
            <Routers />
            <StatusBar style={theme.theme.title === 'light' ? 'dark' : 'light'} />
          </ThemeProvider>
        }
      </ThemeColorsContext.Consumer>
    </ThemeColorsProvider>
  );
}