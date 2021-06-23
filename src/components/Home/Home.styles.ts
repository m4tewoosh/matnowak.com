import styled from 'styled-components';
import { ReactComponent as Blob } from '../../assets/svg/cornerBlob.svg';
import { ReactComponent as Circle } from '../../assets/svg/circle.svg';
import { ReactComponent as CirclesSquare } from '../../assets/svg/circlesSquare.svg';
import { ReactComponent as Square } from '../../assets/svg/square.svg';
import media from '../../styles/media';

export const StyledHome = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #181333;
`;

export const StyledBlob = styled(Blob)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledCircle = styled(Circle)`
  position: absolute;
  left: 0;
  bottom: 16.5rem;
`;

export const StyledSquare = styled(Square)`
  position: absolute;
  right: 5rem;
  top: -25rem;
`;

export const StyledCirclesSquare = styled(CirclesSquare)`
  position: absolute;
  left: -4rem;
  top: -3rem;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0rem 20rem;

  .spacer {
    height: 100%;
    flex: 1;
    min-width: 20rem;
    max-width: 50rem;
  }

  @media ${media.laptopL} {
    padding: 0rem 10rem;
    .spacer {
      display: none;
    }
  }

  @media ${media.tabletL} {
    flex-direction: column;
    padding-top: 20rem;

    .spacer {
      display: flex;
      max-height: 5rem;
    }
  }
  @media ${media.mobileL} {
    padding: 5rem;
    padding-top: 35rem;
    justify-content: center;

    .spacer {
      display: none;
    }
  }
`;

export const StyledName = styled.h2`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 6.4rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: white;

  @media ${media.laptop} {
    font-size: 5.2rem;
    margin-bottom: 3rem;
  }
  @media ${media.tabletL} {
    font-size: 4.8rem;
    margin-bottom: 3rem;
  }

  > span {
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    background-color: white;
    background: linear-gradient(
        123.35deg,
        #ebf3d0 0%,
        rgba(235, 243, 208, 0) 18.4%
      ),
      radial-gradient(
        29.9% 70.94% at 44.25% 86.96%,
        #dc8ddc 0%,
        rgba(220, 141, 220, 0) 100%
      ),
      radial-gradient(
        33.83% 53.57% at 35.87% 100%,
        #dc8ddc 0%,
        rgba(220, 141, 220, 0) 100%
      ),
      linear-gradient(
        128.53deg,
        rgba(192, 169, 240, 0) 28.63%,
        #c0a9f0 38.5%,
        rgba(192, 169, 240, 0) 50.26%
      ),
      linear-gradient(0deg, #c2a6f1, #c2a6f1);

    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const StyledText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  max-width: 70rem;

  @media ${media.tabletL} {
    font-size: 1.6rem;
  }
`;

export const StyledButton = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  color: black;
  width: 17rem;
  height: 4.6rem;
  border: none;
  border-radius: 1rem;
  margin-top: 6rem;
  background: linear-gradient(
      128.53deg,
      rgba(192, 169, 240, 0) 28.63%,
      #c0a9f0 38.5%,
      rgba(192, 169, 240, 0) 50.26%
    ),
    linear-gradient(0deg, #c2a6f1, #c2a6f1);
  transition: transform 0.2s ease 0s;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.5rem);
  }

  @media ${media.tabletL} {
    margin-top: 4rem;
  }
`;

export const StyledSurname = styled.p`
  position: absolute;
  left: -1.4rem;
  bottom: -15.8rem;
  padding: inherit;
  writing-mode: vertical-rl;
  user-select: none;
  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 7.2rem;
    font-weight: 700;
    text-align: bottom;

    &:first-child {
      color: white;
    }
    &:last-child {
      color: #c4c4c4;
    }
  }

  @media ${media.mobileL} {
    padding-left: 5rem;
  }
`;

export const BlobWrapper = styled.div`
  position: relative;

  @media ${media.tablet} {
    transform: scale(0.7);
  }
  @media ${media.mobileL} {
    transform: scale(0.5);
  }
`;

export const NameWrapper = styled.div`
  @media ${media.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
