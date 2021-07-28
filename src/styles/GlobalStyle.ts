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

    /* --gradient: radial-gradient(29.9% 70.94% at 44.25% 86.96%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%),
      radial-gradient(33.83% 53.57% at 35.87% 100%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%),
      radial-gradient(42.66% 49.72% at 45.56% 44.65%, #CBADEB 0%, rgba(194, 166, 241, 0) 100%),
      linear-gradient(216.44deg, rgba(192, 169, 240, 0) -16.52%, #C0A9F0 -1.04%, rgba(192, 169, 240, 0) 16.99%),
      linear-gradient(128.53deg, rgba(192, 169, 240, 0) 28.63%, #C0A9F0 38.5%, rgba(192, 169, 240, 0) 50.26%),
      linear-gradient(0deg, #C2A6F1, #C2A6F1); */
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
