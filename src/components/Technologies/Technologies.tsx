import React from 'react';
import styled from 'styled-components';
import react from '../../assets/png/icons/react.png';
import Redux from '../../assets/png/icons/redux.png';
import JavaScript from '../../assets/png/icons/js.png';
import TypeScript from '../../assets/png/icons/ts.png';
import AntDesign from '../../assets/png/icons/ant.png';
import CSS from '../../assets/png/icons/css.png';
import HTML from '../../assets/png/icons/html.png';
import Sass from '../../assets/png/icons/sass.png';
import Git from '../../assets/png/icons/git.png';

const images = {
  React: react,
  Redux,
  JavaScript,
  TypeScript,
  AntDesign,
  CSS,
  HTML,
  Sass,
  Git,
};

console.log(images);

const TechnologiesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Slider = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(10rem * 18);
  animation: scroll 12s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-10rem * 9));
    }
  }
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 10rem;
    margin: 2rem 5rem;
  }
  p {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

const Header = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 7rem;
`;

const Technologies: React.FC = () => {
  return (
    <TechnologiesContainer id="technologies">
      <Header>Technologies</Header>
      <Slider>
        <SlideTrack>
          {Object.entries(images).map(image => (
            <ImageDiv>
              <img src={image[1]} alt={image[0]} />
              <p>{image[0]}</p>
            </ImageDiv>
          ))}
        </SlideTrack>
      </Slider>
    </TechnologiesContainer>
  );
};

export default Technologies;
