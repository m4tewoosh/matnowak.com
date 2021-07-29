import styled from 'styled-components';
import media from '../../../styles/media';

type StyledMenuProps = {
  isOpen: Boolean;
};

export const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style-type: none;
    li {
      button {
        position: relative;
        font-size: 1.8rem;
        font-weight: 300;
        border: none;
        color: rgba(255, 254, 255, 0.4);

        background-color: unset;
        margin-right: 5rem;

        &:hover {
          cursor: pointer;
          color: #fffeff;

          &:after {
            width: 80%;
            left: 10%;
          }
        }

        &:after {
          content: '';
          position: absolute;
          width: 0;
          bottom: -10px;
          left: 50%;
          height: 4px;
          border-radius: 100px;
          background: var(--gradient);

          transition: width 0.3s ease 0s, left 0.3s ease 0s;
        }
      }
    }
  }

  @media ${media.laptopL} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #181333;
    border-bottom: 2px solid white;
    height: 55vh;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    transition: transform 0.3s ease-in-out;

    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0%)' : 'translateX(-100%)'};

    ul {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        margin-bottom: 2rem;
        button {
          font-size: 2.2rem;
        }
        &:first-child {
          margin-top: 2rem;
        }
        button {
          margin: unset;
        }
      }
    }
    button {
      font-size: 2.4rem;
      width: 18.75rem;
      height: 6.75rem;
      margin-top: 1.3rem;
    }
  }

  @media ${media.tablet} {
    button {
      font-size: 2rem;
      width: 16rem;
      height: 6rem;
      margin-top: 0.5rem;
    }
    ul li button {
      font-size: 2.2rem;
    }
  }

  @media ${media.mobileL} {
    button {
      font-size: 2.2rem;
      width: 16rem;
      height: 6rem;
      margin-top: 0.5rem;
    }
    ul li button {
      font-size: 2.2rem;
    }
  }
  @media ${media.mobileS} {
    button {
      font-size: 1.8rem;
      width: 14rem;
      height: 5rem;
      margin-top: 0.5rem;
    }
    ul li button {
      font-size: 1.8rem;
    }
  }

  @media (orientation: landscape) and (max-height: 400px) and (max-width: 1000px) {
    height: 100vh;
  }
`;

export const StyledContact = styled.button`
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
