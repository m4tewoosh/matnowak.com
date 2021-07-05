import me from '../../assets/jpg/me.jpg';
import * as S from './About.styles';

const About: React.FC = () => {
  return (
    <S.StyledAbout id="about">
      <S.Header>About me</S.Header>
      <S.Text>
        I have started my journey with programming a few years ago in school. I
        didn't like it at start, but with every next challenging project, I've
        earned experience and started having fun with It. When I discovered{' '}
        <span>
          <strong>React</strong>
        </span>
        , I immediately fell in love with this technology. Now I've done few
        commercial projects with it, and I'm still amazed of it and wanting to
        raise my skill.
      </S.Text>
      <S.Me src={me} />
    </S.StyledAbout>
  );
};

export default About;
