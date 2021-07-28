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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0rem 20rem;

  .spacer {
    flex: 1;
    min-width: 20rem;
    max-width: 50rem;
  }

  @media ${media.desktop} {
    padding: 0rem 15rem;
  }

  @media ${media.laptopL} {
    padding: 0rem 10rem;
  }

  @media ${media.tabletL} {
    flex-direction: column;
    padding: 0rem 7rem;
    padding-top: 20rem;
    justify-content: center;

    .spacer {
      max-height: 5rem;
    }
  }

  @media ${media.mobileL} {
    padding: 0 3rem;
    justify-content: flex-end;
    align-items: center;
    .spacer {
      display: none;
    }
  }

  @media (max-height: 600px) {
    padding-top: 0;
    justify-content: center;
  }
`;

export const StyledName = styled.h2`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 6.4rem;
  font-weight: 700;
  /* margin-bottom: 4rem; */
  color: white;

  @media ${media.desktop} {
    font-size: 4.8rem;
  }

  @media ${media.mobileS} {
    text-align: center;
    font-size: 3.6rem;
  }
  white-space: nowrap;
  > span {
    position: relative;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-text-stroke: 0.1rem white;
    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-text-stroke: 1rem var(--gradient);

    /* 
    &::before {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      content: 'Nowak';
      position: absolute;
      background: var(--gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      -webkit-text-stroke: 1rem var(--gradient);

      top: 0;
      left: 0;
      height: 100%;
      border-right: 2px solid white;
      overflow: hidden;
      animation: animate 2s linear;
    } */
  }
`;

export const StyledText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  max-width: 50rem;
  @media ${media.mobileL} {
    text-align: start;
  }
`;

export const StyledButton = styled.button`
  font-size: 1.8rem;
  font-weight: 600;
  color: #181333;
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

export const StyledReact = styled.h1`
  position: relative;
  white-space: nowrap;
  display: inline-block;
  font-size: 6.4rem;
  font-weight: 700;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  /* -webkit-text-stroke: 0.05rem white; */
  @media ${media.desktop} {
    font-size: 5rem;
  }
  @media ${media.laptop} {
    margin-bottom: 3rem;
  }
  @media ${media.mobileS} {
    font-size: 4rem;
  }
  animation: stroke 2.5s step-end;
  animation-delay: 0.3s;

  &::before {
    width: 0;
    font-weight: 700;
    content: 'React developer';
    position: absolute;
    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    top: 0;
    left: 0;
    height: 100%;
    -webkit-text-stroke: 0rem;
    border-right: 2px solid white;
    animation: animate 2.5s cubic-bezier(0.26, 0.8, 0.55, 0.405);
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
    overflow: hidden;
  }

  @keyframes animate {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes stroke {
    0% {
      -webkit-text-stroke: 0.05rem white;
    }
    100% {
      -webkit-text-stroke: 0;
    }
  }
`;

export const NameWrapper = styled.div`
  @media ${media.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
