import MainBlob from '../MainBlob/MainBlob';
import MotionCircle from './MotionCircle';
import MotionSquare from './MotionSquare';
import * as S from './Home.styles';

const Home: React.FC = () => {
  return (
    <S.StyledHome id="home">
      <S.StyledBlob />
      <MotionCircle />
      <S.StyledContent>
        <S.NameWrapper>
          <S.StyledName>
            Matthew <span>Nowak</span>
            <S.StyledCirclesSquare />
            <MotionSquare />
          </S.StyledName>
          <S.StyledText>
            Hello, I am Matthew Nowak, 20 years old frontend developer based in
            Cracow, Poland. I mainly specialize in React.
          </S.StyledText>
          <S.StyledButton>Download CV</S.StyledButton>
        </S.NameWrapper>
        <MainBlob />
      </S.StyledContent>
      <S.StyledSurname>
        <span>No</span>
        <span>wak</span>
      </S.StyledSurname>
    </S.StyledHome>
  );
};

export default Home;
