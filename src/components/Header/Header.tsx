import styled from 'styled-components';
import { StyledHeader } from './Header.styled';

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
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div></div>
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
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
