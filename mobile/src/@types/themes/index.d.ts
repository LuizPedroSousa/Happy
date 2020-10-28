import 'styled-components';
declare module 'styled-components'{
    interface DefaultTheme{
        title: string,
        colors: {
            primary: string,
            white: string,
            black: string,
            textComplement: string,
            textComplementDark: string,
            alert: string,
            buttonPrimary: string,
        }
    }
}