import styled from 'styled-components';
import media from '../../styles/media';

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 7rem 20rem;
  background-color: #181333;

  @media ${media.laptopL} {
    padding: 5rem 5rem;
  }
  @media ${media.mobileL} {
    padding: 5rem 0;
  }
`;

export const SlideTrack = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
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
