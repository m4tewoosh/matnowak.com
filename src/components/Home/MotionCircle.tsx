import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledMotionCircle = styled.div`
  position: absolute;
  left: 0;
  bottom: 16.5rem;
`;

const MotionCircle: React.FC = () => {
  return (
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
  );
};

export default MotionCircle;
