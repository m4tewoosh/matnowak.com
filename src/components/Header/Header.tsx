import styled from 'styled-components';
import { StyledHeader } from './Header.styled';
import { Link } from 'react-scroll';

const StyledContact = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  width: 12.5rem;
  height: 4.5rem;
  border: none;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;

  &:hover {
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div></div>
      <nav>
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true}>
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>
              <button>About</button>
            </Link>
          </li>
          <li>
            <button>Technologies</button>
          </li>
        </ul>
        <StyledContact>Contact</StyledContact>
      </nav>
    </StyledHeader>
  );
};

export default Header;
