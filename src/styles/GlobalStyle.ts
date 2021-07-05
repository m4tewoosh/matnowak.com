import { createGlobalStyle } from 'styled-components';
import media from './media';
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
    image-rendering: -webkit-optimize-contrast;

    @media ${media.tablet}{
      font-size: 55%;
    }
    
    @media ${media.laptop}{
      font-size: 50%;
    }
   
 
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
  background:linear-gradient(120deg, #a6c0fe 0%,#f68084 100%);
}
`;
