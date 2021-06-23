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
        font-size: 1.6rem;
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

          transition: width 0.3s ease 0s, left 0.3s ease 0s;
        }
      }
    }
  }

  @media ${media.tablet} {
    flex-direction: column;
    align-items: center;
    background-color: #181333;
    border-bottom: 2px solid #c2a6f0;
    height: 70vw;
    width: 100vw;
    margin-top: 5rem;
    left: 0;
    position: absolute;
    transition: transform 0.3s ease-in-out;

    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
    ul {
      flex-direction: column;
      align-items: center;

      li {
        margin-bottom: 2rem;
        &:first-child {
          margin-top: 2rem;
        }
        button {
          margin: unset;
        }
      }
    }
  }
`;
