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
    font-size: 62.5%;
 
  }
  body { 
    overflow-x: hidden;
  }

  ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background: linear-gradient(
      128.53deg,
      rgba(192, 169, 240, 0) 28.63%,
      #c0a9f0 38.5%,
      rgba(192, 169, 240, 0) 50.26%
    ),
    linear-gradient(0deg, #c2a6f1, #c2a6f1); 
}
`;
