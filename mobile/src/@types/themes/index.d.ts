import 'styled-components';
declare module 'styled-components' {
    interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            primaryLight: string,
            primaryDark: string,
            white: string,
            black: string,
            textComplement: string,
            textComplementDark: string,
            alert: string,
            buttonPrimary: string,
            onBoardingBackground: string,
            onBoardingTitle: string,
            onBoardingSubTitle: string,
            onBoardingNextButton: string,
            onBoardingDotLight: string,
            onBoardingDotSelected: string,
        }
    }
}