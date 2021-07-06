import { createGlobalStyle } from 'styled-components';
import media from './media';
export default createGlobalStyle`
  // Reset 
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
    image-rendering: -webkit-optimize-contrast;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }
  // CSS Variables
  :root{
    --gradient:linear-gradient(to right, #EA8D8D , #A890FE);
  }

  body{
    overflow-x: hidden;
  }

  html{ 
    font-size: 62.5%;

    @media ${media.tablet}{
      font-size: 55%;
    }
    
    @media ${media.laptop}{
      font-size: 50%;
    }
  }


  ::-webkit-scrollbar {
    width: 1.2rem;
    background-color: #F5F5F5;
    
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background:var(--gradient);
  }
`;
