import React from 'react';
import MainBlob from '../MainBlob/MainBlob';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import * as S from './Home.styles';

const StyledMotion = styled.div`
  position: absolute;
  top: -13rem;
  right: 3rem;
`;

const StyledMotionCircle = styled.div`
  position: absolute;
  left: 0;
  bottom: 16.5rem;
`;

const Home: React.FC = () => {
  return (
    <S.StyledHome id="home">
      <S.StyledBlob />
      <StyledMotionCircle>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 46 200"
          width="46"
          height="200"
          stroke="white"
          stroke-width="5"
        >
          <motion.circle
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            opacity="0.2"
            cx={-54}
            cy={100}
            r={99.5}
            transition={{ duration: 2, ease: 'easeInOut' }}
            initial={{
              r: 50,
            }}
            animate={{
              r: 99.5,
            }}
          />
        </motion.svg>
      </StyledMotionCircle>
      <S.StyledContent>
        <S.NameWrapper>
          <S.StyledName>
            Matthew <span>Nowak</span>
            <S.StyledCirclesSquare />
            <StyledMotion>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 78 78"
                width="78"
                height="78"
                fill="none"
                opacity="0.4"
              >
                <motion.path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                  strokeWidth={1}
                  transition={{
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                  initial={{
                    rotate: -45,
                    pathLength: 0,
                  }}
                  animate={{
                    rotate: 0,
                    pathLength: 1,
                  }}
                  d="M0.707107 39L39 0.707107L77.2929 39L39 77.2929L0.707107 39Z"
                />
              </motion.svg>
            </StyledMotion>
          </S.StyledName>
          <S.StyledText>
            Hello, I am Matthew Nowak, frontend developer
          </S.StyledText>
          <S.StyledText>
            based in Cracow, Poland. I mainly specialize in React.
          </S.StyledText>
          <S.StyledButton>Download CV</S.StyledButton>
        </S.NameWrapper>
        <div className="spacer"></div>
        <S.BlobWrapper>
          <div style={{ position: 'relative' }}>
            <MainBlob />
          </div>
        </S.BlobWrapper>
      </S.StyledContent>
      <S.StyledSurname>
        <span>No</span>
        <span>wak</span>
      </S.StyledSurname>
    </S.StyledHome>
  );
};

export default Home;
