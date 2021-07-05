import styled from 'styled-components';
import me from '../../assets/jpg/me.jpg';
import media from '../../styles/media';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 20rem;

  @media (max-width: 1025px) {
    padding: 5rem 8rem;
  }

  @media ${media.mobileL} {
    padding: 5rem 3rem;
  }
  @media ${media.mobileL} {
    padding: 5rem 1rem;
  }
`;

const Header = styled.h2`
  color: #181333;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 7rem;
`;

const Text = styled.p`
  font-size: 1.8rem;
  text-align: justify;
  max-width: 30%;
  > span strong {
    font-weight: 600;
    color: #181333;
  }
  @media ${media.desktop} {
    max-width: 60%;
  }
  @media ${media.tablet} {
    max-width: 75%;
  }
  @media ${media.mobileL} {
    max-width: 80%;
  }
`;

const Me = styled.img`
  width: 350px;
  margin-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media ${media.tablet} {
    width: 28rem;
  }
`;

const About: React.FC = () => {
  return (
    <StyledAbout id="about">
      <Header>About me</Header>
      <Text>
        I have started my journey with programming a few years ago in school. I
        didn't like it at start, but with every next challenging project, I've
        earned experience and started having fun with It. When I discovered{' '}
        <span>
          <strong>React</strong>
        </span>
        , I immediately fell in love with this technology. Now I've done few
        commercial projects with it, and I'm still amazed of it and wanting to
        raise my skill.
      </Text>
      <Me src={me} />
    </StyledAbout>
  );
};

export default About;
