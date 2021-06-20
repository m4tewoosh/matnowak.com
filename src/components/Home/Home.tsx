import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Blob } from '../../assets/svg/cornerBlob.svg';
import { ReactComponent as Circle } from '../../assets/svg/circle.svg';
import { ReactComponent as CirclesSquare } from '../../assets/svg/circlesSquare.svg';

const StyledHome = styled.div`
  position: relative;
  width: 100vw;
  /* height: calc(100vh - 8rem); */
  height: 100vh;
  background-color: #181333;
  padding: 0 23rem;
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

const StyledCirclesSquare = styled(CirclesSquare)`
  position: absolute;
  left: -4rem;
  top: -3rem;
`;

const StyledContent = styled.div`
  width: 100%;
  padding-top: 12rem;
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

const Home: React.FC = () => {
  return (
    <StyledHome>
      <StyledBlob />
      <StyledCircle />
      <StyledContent>
        <StyledName>
          Matthew <span>Nowak</span>
          <StyledCirclesSquare />
        </StyledName>
        <StyledText>Hello, I am Matthew Nowak, frontend developer</StyledText>
        <StyledText>
          based in Cracow, Poland. I mainly specialize in React.
        </StyledText>
        <StyledButton>Download CV</StyledButton>
      </StyledContent>
    </StyledHome>
  );
};

export default Home;
