import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Blob } from '../../assets/svg/cornerBlob.svg';
import { ReactComponent as Circle } from '../../assets/svg/circle.svg';
import { ReactComponent as CirclesSquare } from '../../assets/svg/circlesSquare.svg';

const StyledHome = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #181333;
`;

const StyledBlob = styled(Blob)`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledCircle = styled(Circle)`
  position: absolute;
  bottom: 16.5rem;
`;

const StyledCirclesSquare = styled(CirclesSquare)`
  position: absolute;
  bottom: 16.5rem;
`;

const Home: React.FC = () => {
  return (
    <StyledHome>
      <StyledBlob />
      <StyledCircle />
      {/* <StyledCirclesSquare /> */}
      <h1>xd</h1>
    </StyledHome>
  );
};

export default Home;
