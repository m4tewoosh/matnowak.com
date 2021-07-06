import { StyledBurger } from './Burger.styles';

type BurgerProps = {
  isOpen: Boolean;
  setIsOpen: Function;
};

const Burger: React.FC<BurgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </StyledBurger>
  );
};

export default Burger;
