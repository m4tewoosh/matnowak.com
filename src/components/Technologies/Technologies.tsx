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
import * as S from './Technologies.styles';

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

const Technologies: React.FC = () => {
  return (
    <S.TechnologiesContainer id="technologies">
      <S.Header>Technologies</S.Header>
      <S.SlideTrack>
        {Object.entries(images).map(image => (
          <S.ImageDiv>
            <img src={image[1]} alt={image[0]} />
            <p>{image[0]}</p>
          </S.ImageDiv>
        ))}
      </S.SlideTrack>
    </S.TechnologiesContainer>
  );
};

export default Technologies;
