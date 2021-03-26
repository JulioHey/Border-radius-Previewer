import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        display: flex;
    };

    h1, h2, h3, h4, h5, h6, a, p, strong, input, div {
        font-family: Roboto Mono, sans-serif;
        cursor: default;
    }
`

export {GlobalStyle};
