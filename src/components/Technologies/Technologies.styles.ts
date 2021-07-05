import styled from 'styled-components';
import media from '../../styles/media';

export const TechnologiesContainer = styled.div`
  width: 100vw;
  background-color: #181333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 20rem;

  @media ${media.laptopL} {
    padding: 5rem 5rem;
  }
  @media ${media.mobileL} {
    padding: 5rem 0;
  }
`;

export const SlideTrack = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  animation: scroll 1s linear;

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const ImageDiv = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  > img {
    width: 10rem;
  }
  p {
    margin-top: 1rem;
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
    color: white;
  }

  @media ${media.mobileS} {
    width: 15rem;
  }
`;

export const Header = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 7rem;
  color: white;
`;
