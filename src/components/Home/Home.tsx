import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Blob } from '../../assets/svg/cornerBlob.svg';
import { ReactComponent as Circle } from '../../assets/svg/circle.svg';
import { ReactComponent as CirclesSquare } from '../../assets/svg/circlesSquare.svg';
import { ReactComponent as Square } from '../../assets/svg/square.svg';
import MainBlob from '../MainBlob/MainBlob';
import me from '../.././assets/png/me.png';

const StyledHome = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #181333;
  padding: 0 23rem;

  @media (min-width: 2560px) {
    padding: 0 60rem;
  }
`;

const StyledBlob = styled(Blob)`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledCircle = styled(Circle)`
  position: absolute;
  left: 0;
  bottom: 16.5rem;
`;

const StyledSquare = styled(Square)`
  position: absolute;
  right: 5rem;
  top: -25rem;
`;

const StyledCirclesSquare = styled(CirclesSquare)`
  position: absolute;
  left: -4rem;
  top: -3rem;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding-top: 17rem;
`;

const StyledName = styled.h2`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 6.4rem;
  font-weight: 700;
  margin-top: 30rem;
  margin-bottom: 4rem;
  color: white;

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

const StyledText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  max-width: 70rem;
`;

const StyledButton = styled.button`
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
`;

const StyledSurname = styled.p`
  position: absolute;
  left: 0;
  bottom: -15.8rem;
  padding: inherit;
  writing-mode: vertical-rl;
  user-select: none;
  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 7.2rem;
    font-weight: 700;
    &:first-child {
      color: white;
    }
    &:last-child {
      color: #c4c4c4;
    }
  }
`;

const Me = styled.img`
  position: absolute;
  width: 45rem;
  top: -8rem;
  right: -5rem;
  z-index: 200;
`;

const Home: React.FC = () => {
  return (
    <StyledHome>
      <StyledBlob />
      <StyledCircle />
      <StyledContent>
        <div>
          <StyledName>
            Matthew <span>Nowak</span>
            <StyledCirclesSquare />
            <StyledSquare />
          </StyledName>
          <StyledText>Hello, I am Matthew Nowak, frontend developer</StyledText>
          <StyledText>
            based in Cracow, Poland. I mainly specialize in React.
          </StyledText>
          <StyledButton>Download CV</StyledButton>
        </div>
        <div style={{ position: 'relative' }}>
          <MainBlob />
          {/* <Me src={me} /> */}
        </div>
      </StyledContent>
      <StyledSurname>
        <span>No</span>
        <span>wak</span>
      </StyledSurname>
    </StyledHome>
  );
};

export default Home;
