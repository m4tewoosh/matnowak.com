import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import media from '../../styles/media';

const StyledMotionSquare = styled.div`
  position: absolute;
  top: -13rem;
  right: 3rem;

  @media ${media.mobileL} {
    top: -6rem;
  }
`;

const MotionSquare: React.FC = () => {
  return (
    <StyledMotionSquare>
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
    </StyledMotionSquare>
  );
};

export default MotionSquare;
