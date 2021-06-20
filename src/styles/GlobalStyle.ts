import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      /* Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-weight: normal;
    text-decoration: none;
    -webkit-font-smoothing: antianalized;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }

  html{ 
    /* @media(min-width: 1440px){ */

    font-size: 62.5%;
    /* } */
  }


`;
