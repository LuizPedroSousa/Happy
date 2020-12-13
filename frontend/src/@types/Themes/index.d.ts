import 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme {
        title: string,
        colors: {
            black: string
            white: string
            green: string
            background: string
            primary: string
            primaryDark: string
            secondary: string
            buttonText: string
            buttonTextDark: string
            buttonPrimary: string
            buttonPrimaryDark: string
            buttonSecondary: string
            textComplement: string
            buttonForm: string
            outlineBase: string
            input: string
            inputOutline: string
            boxUtilities: string
            alert: string
        }
    }
}
