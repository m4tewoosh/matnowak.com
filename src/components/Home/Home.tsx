import React from 'react';
import MainBlob from '../MainBlob/MainBlob';

import * as S from './Home.styles';

const Home: React.FC = () => {
  return (
    <S.StyledHome id="home">
      <S.StyledBlob />
      <S.StyledCircle />
      <S.StyledContent>
        <S.NameWrapper>
          <S.StyledName>
            Matthew <span>Nowak</span>
            <S.StyledCirclesSquare />
            <S.StyledSquare />
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
