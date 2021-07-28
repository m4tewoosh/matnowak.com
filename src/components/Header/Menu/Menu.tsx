import { Link } from 'react-scroll';
import { StyledMenu, StyledContact } from './Menu.styles';
export interface MenuProps {
  isOpen: Boolean;
  setIsOpen: Function;
}

const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMenu isOpen={isOpen}>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true}>
            <button onClick={() => setIsOpen(!isOpen)}>Home</button>
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            <button onClick={() => setIsOpen(!isOpen)}>About</button>
          </Link>
        </li>
        <li>
          <Link to="technologies" spy={true} smooth={true}>
            <button onClick={() => setIsOpen(!isOpen)}>Technologies</button>
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true}>
            <button onClick={() => setIsOpen(!isOpen)}>Projects</button>
          </Link>
        </li>
      </ul>
      <Link to="contact" spy={true} smooth={true}>
        <StyledContact onClick={() => setIsOpen(!isOpen)}>
          Contact
        </StyledContact>
      </Link>
    </StyledMenu>
  );
};

export default Menu;
