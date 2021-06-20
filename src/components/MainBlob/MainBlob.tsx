import styled from 'styled-components';
import { ReactComponent as Blob } from '../../assets/svg/mainBlob.svg';
import { ReactComponent as Contour1 } from '../../assets/svg/contour1.svg';
import { ReactComponent as Contour2 } from '../../assets/svg/contour2.svg';
import { ReactComponent as Contour3 } from '../../assets/svg/contour3.svg';
import { ReactComponent as Circle1 } from '../../assets/svg/circle1.svg';
import { ReactComponent as Circle2 } from '../../assets/svg/circle2.svg';
import { ReactComponent as Circle3 } from '../../assets/svg/circle3.svg';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1600px) {
    transform: scale(0.8);
  }
`;

const StyledBlob = styled(Blob)`
  clip-path: url(#mainBlob);
  backdrop-filter: blur(10px);
  z-index: 200;
`;

const StyledContour1 = styled(Contour1)`
  position: absolute;
  top: -2.2rem;
`;
const StyledContour2 = styled(Contour2)`
  position: absolute;
  top: -5rem;
`;
const StyledContour3 = styled(Contour3)`
  position: absolute;
  top: -8rem;
`;

const StyledCircle1 = styled(Circle1)`
  position: absolute;
  top: 3rem;
  left: 5rem;
  z-index: 2;
`;

const StyledCircle2 = styled(Circle2)`
  position: absolute;
  bottom: 5rem;
  right: -4.4rem;
  z-index: 0;
`;

const StyledCircle3 = styled(Circle3)`
  position: absolute;
  bottom: -20rem;
  left: -5rem;
  z-index: 2;
`;

const MainBlob: React.FC = () => {
  return (
    <StyledContainer>
      <StyledBlob />
      <StyledCircle1 />
      <StyledCircle2 />
      <StyledCircle3 />
      <StyledContour1 />
      <StyledContour2 />
      <StyledContour3 />
    </StyledContainer>
  );
};

export default MainBlob;
