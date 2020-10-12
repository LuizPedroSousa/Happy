import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root{
        height: 100vh;
    }
    body{
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.background};
    }

    body, input, button,textarea{
        font: 600 1.8rem Nunito, sans-serif;
    }
`;