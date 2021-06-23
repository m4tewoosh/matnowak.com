import styled from 'styled-components';
import me from '../../assets/jpg/me.jpg';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 23rem;

  @media (max-width: 1025px) {
    padding: 5rem 8rem;
  }
`;

const Header = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 7rem;
`;

const Text = styled.p`
  font-size: 1.8rem;
  text-align: justify;
  max-width: 60%;
  > span strong {
    font-weight: 600;
  }
`;

const Me = styled.img`
  width: 350px;
  margin-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const About: React.FC = () => {
  return (
    <StyledAbout id="about">
      <Header>About me</Header>
      <Text>
        I have started my journey with programming a few years ago in school. I
        didn't like it at start, but with every next challenging project I've
        earned experience and started having fun with It. When I discovered{' '}
        <span>
          <strong>React</strong>
        </span>
        , I immediately fell in love with this technology. Now I've done few big
        commercial projects with it, and I'm still amazed of it and wanting to
        raise my skill.
      </Text>
      <Me src={me} />
    </StyledAbout>
  );
};

export default About;
