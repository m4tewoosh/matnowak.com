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
          <S.StyledReact>React developer</S.StyledReact>
          <S.StyledText>
            Hello, I am Matthew Nowak, 20 years old frontend developer based in
            Cracow, Poland. I mainly specialize in React.
          </S.StyledText>
          <a href="https://drive.google.com/file/d/1FD0OzA1AIqWqP5s_A12PZoH0f_bswcWB/view?usp=sharing">
            <S.StyledButton>Download CV</S.StyledButton>
          </a>
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
