import { StyledHeader } from './Header.styles';
import Burger from './Burger/Burger';
import { useState } from 'react';
import Menu from './Menu/Menu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [scroll, setScroll] = useState(0);

  document.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  });

  return (
    <StyledHeader scroll={scroll}>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledHeader>
  );
};

export default Header;
