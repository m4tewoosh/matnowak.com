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
import Styled from '../../assets/png/icons/styled.png';
import GraphQL from '../../assets/png/icons/graphql.png';
import media from '../../styles/media';

const images = {
  React: react,
  Redux,
  JavaScript,
  TypeScript,
  'Ant Design': AntDesign,
  CSS,
  HTML,
  Sass,
  Git,
  'Styled Components': Styled,
  GraphQL,
};

console.log(images);

const TechnologiesContainer = styled.div`
  width: 100vw;
  background-color: #181333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 20rem;

  @media ${media.laptopL} {
    padding: 5rem 5rem;
  }
  @media ${media.mobileL} {
    padding: 5rem 0;
  }

  // const Slider = styled.div
`;
//   position: relative;
//   overflow: hidden;
// `;

const SlideTrack = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  animation: scroll 1s linear;

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ImageDiv = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  > img {
    width: 10rem;
    /* margin: 2rem 5rem; */
  }
  p {
    margin-top: 1rem;
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
    color: white;
  }

  @media ${media.mobileS} {
    width: 15rem;
  }
`;

const Header = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 7rem;
  color: white;
`;

const Technologies: React.FC = () => {
  return (
    <TechnologiesContainer id="technologies">
      <Header>Technologies</Header>
      {/* <Slider> */}
      <SlideTrack>
        {Object.entries(images).map(image => (
          <ImageDiv>
            <img src={image[1]} alt={image[0]} />
            <p>{image[0]}</p>
          </ImageDiv>
        ))}
        {/* {Object.entries(images).map(image => (
            <ImageDiv>
              <img src={image[1]} alt={image[0]} />
              <p>{image[0]}</p>
            </ImageDiv>
          ))} */}
      </SlideTrack>
      {/* </Slider> */}
    </TechnologiesContainer>
  );
};

export default Technologies;
