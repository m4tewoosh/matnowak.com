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

  ::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey;  */
  /* border-radius: 10px; */
  /* background: transparent; */
  /* background-color: red; */
  /* display: none; */
  background-color: transparent;
}
 

  ::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px;

}
::-webkit-scrollbar-thumb {
  background: linear-gradient(
      128.53deg,
      rgba(192, 169, 240, 0) 28.63%,
      #c0a9f0 38.5%,
      rgba(192, 169, 240, 0) 50.26%
    ),
    linear-gradient(0deg, #c2a6f1, #c2a6f1); 
  border-radius: 10px;
}

`;
