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
          background: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);

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
    border-bottom: 2px solid #c2a6f0;
    height: 50vh;
    width: 100vw;
    /* margin-top: 5rem; */
    position: absolute;
    left: 0;
    top: 0;
    transition: transform 0.3s ease-in-out;

    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0%)' : 'translateX(-100%)'};

    ul {
      /* height: 100%; */
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        margin-bottom: 2rem;
        button {
          font-size: 2.4rem;
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
`;
