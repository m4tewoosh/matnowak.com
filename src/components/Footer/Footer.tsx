import styled from 'styled-components';
import { ReactComponent as GitHubIcon } from '../../assets/svg/gh.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/svg/linkedin.svg';

const StyledFooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 7rem;
  background-color: #181333;
  h3 {
    color: white;
    font-size: 1.6rem;
    margin-right: 2rem;
  }

  a {
    margin-right: 2rem;
  }
`;

const StyledGHIcon = styled(GitHubIcon)`
  width: 3rem;
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  width: 3rem;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <h3>matnowak.com © 2021</h3>
      <a href="https://github.com/m4tewoosh">
        <StyledGHIcon />
      </a>
      <a href="https://www.linkedin.com/in/mateusz-nowak-a342741bb/">
        <StyledLinkedInIcon />
      </a>
    </StyledFooter>
  );
};

export default Footer;
