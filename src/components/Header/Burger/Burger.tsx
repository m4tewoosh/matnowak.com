import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';

const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5.5rem;
  height: 3.5rem;
  border: none;
  background-color: transparent;
  z-index: 1000;

  .line {
    width: 100%;
    height: 0.4rem;
    background: var(--gradient);
    transition: all 0.3s linear;

    :first-child {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(-45deg) translate(-1.4rem, 1.2rem)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(3rem)' : 'translateX(0)'};
    }
    :last-child {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(45deg) translate(-0.9rem, -0.9rem)' : 'rotate(0)'};
    }
  }

  @media ${media.laptopL} {
    display: flex;
  }
  @media (min-width: 1251px) {
    display: none;
  }
`;

type BurgerProps = {
  isOpen: Boolean;
  setIsOpen: Function;
};

type StyledBurgerProps = {
  isOpen: Boolean;
};
const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </StyledBurger>
  );
};

export default Burger;
