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

  .line {
    width: 100%;
    height: 0.4rem;
    background: radial-gradient(
        29.9% 70.94% at 44.25% 86.96%,
        #dc8ddc 0%,
        rgba(220, 141, 220, 0) 100%
      ),
      radial-gradient(
        33.83% 53.57% at 35.87% 100%,
        #dc8ddc 0%,
        rgba(220, 141, 220, 0) 100%
      ),
      linear-gradient(
        128.53deg,
        rgba(192, 169, 240, 0) 28.63%,
        #c0a9f0 38.5%,
        rgba(192, 169, 240, 0) 50.26%
      ),
      linear-gradient(0deg, #c2a6f1, #c2a6f1);
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

  @media ${media.tabletL} {
    display: flex;
  }
  @media (min-width: 768px) {
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
