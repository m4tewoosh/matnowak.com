import styled from 'styled-components';
import { ReactComponent as Blob } from '../../assets/svg/cornerBlob.svg';
import { ReactComponent as Circle } from '../../assets/svg/circle.svg';
import { ReactComponent as CirclesSquare } from '../../assets/svg/circlesSquare.svg';
import { ReactComponent as Square } from '../../assets/svg/square.svg';
import media from '../../styles/media';

export const StyledHome = styled.section`
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

  @media ${media.mobileL} {
    /* display */
    top: -11rem;
  }
`;

export const StyledCirclesSquare = styled(CirclesSquare)`
  position: absolute;
  left: -4rem;
  top: -3rem;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 0rem 20rem;

  .spacer {
    height: 100%;
    flex: 1;
    min-width: 20rem;
    max-width: 50rem;
  }
  @media ${media.desktop} {
    padding: 0rem 15rem;
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
    justify-content: center;

    .spacer {
      display: flex;
      max-height: 5rem;
    }
  }

  @media ${media.tabletL} {
    padding: 0rem 7rem;
    padding-top: 20rem;
  }
  @media ${media.mobileL} {
    /* padding: 5rem; */
    /* padding-top: 40rem; */
    padding: 0;
    padding: 0 5.5rem;
    justify-content: flex-end;
    align-items: center;
    .spacer {
      display: none;
    }
  }

  @media (max-height: 600px) {
    padding-top: 0;
  }

  /* @media (max-height: 800px) {
    justify-content: center;
  } */
`;

export const StyledName = styled.h2`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 6.4rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: white;

  @media ${media.desktop} {
    font-size: 5rem;
  }
  @media ${media.laptop} {
    /* font-size: 5.2rem; */
    margin-bottom: 3rem;
  }
  @media ${media.tabletL} {
    /* font-size: 4.8rem; */
    margin-bottom: 3rem;
  }
  @media ${media.mobileL} {
    /* font-size: 4.8rem; */
  }

  > span {
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    background: var(--gradient);
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
  @media ${media.mobileL} {
    /* font-size: 4.8rem; */
    text-align: start;
  }
`;

export const StyledButton = styled.button`
  font-size: 1.8rem;
  font-weight: 600;
  color: black;
  width: 17rem;
  height: 4.6rem;
  border: none;
  border-radius: 1rem;
  margin-top: 6rem;
  background: var(--gradient);
  transition: transform 0.2s ease 0s;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.5rem);
  }

  @media ${media.tabletL} {
    margin-top: 4rem;
  }

  @media ${media.mobileL} {
    align-self: center;
  }
`;

export const StyledSurname = styled.p`
  position: absolute;
  left: -1.4rem;
  bottom: -15.8rem;
  padding: inherit;
  writing-mode: vertical-rl;
  user-select: none;
  margin-left: 20rem;
  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 7.2rem;
    font-weight: 700;
    text-align: bottom;

    &:first-child {
      color: white;
    }
    &:last-child {
      background: var(--gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }

  @media ${media.desktop} {
    margin-left: 15rem;
  }
  @media ${media.laptopL} {
    margin-left: 10rem;
  }
  @media ${media.mobileL} {
    margin-left: 0;
  }
  @media (max-height: 600px) {
    margin-left: 0;
  }
`;

export const BlobWrapper = styled.div`
  position: relative;
  @media ${media.tabletL} {
    transform: scale(0.9);
  }
  @media ${media.tablet} {
    transform: scale(0.7);
  }
  @media ${media.mobileL} {
    transform: scale(0.4);
  }

  /* @media (max-height: 800px) {
    height: 25rem;
  } */
`;

export const NameWrapper = styled.div`
  @media ${media.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
