import { createGlobalStyle } from 'styled-components';

/* Sets font and background for each page. */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;