import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 7.5rem 23rem;
  nav {
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
              width: 100%;
              left: 0;
            }
          }

          &:after {
            content: '';
            position: absolute;
            display: block;
            width: 0;
            bottom: -10px;
            left: 50%;
            height: 4px;
            border-radius: 100px;
            background: linear-gradient(
                123.35deg,
                #ebf3d0 0%,
                rgba(235, 243, 208, 0) 18.4%
              ),
              radial-gradient(
                29.9% 70.94% at 44.25% 86.96%,
                #dc8ddc 0%,
                rgba(220, 141, 220, 0) 100%
              ),
              radial-gradient(
                33.83% 53.57% at 35.87% 100%,
                #dc8ddc 0%,
                rgba(220, 141, 220, 0) 100%
              ),
              radial-gradient(
                42.66% 49.72% at 45.56% 44.65%,
                #cbadeb 0%,
                rgba(194, 166, 241, 0) 100%
              ),
              linear-gradient(
                134.59deg,
                #cdf9e8 20.63%,
                rgba(205, 249, 232, 0) 47.84%
              ),
              linear-gradient(
                216.44deg,
                rgba(192, 169, 240, 0) -16.52%,
                #c0a9f0 -1.04%,
                rgba(192, 169, 240, 0) 16.99%
              ),
              linear-gradient(
                128.53deg,
                rgba(192, 169, 240, 0) 28.63%,
                #c0a9f0 38.5%,
                rgba(192, 169, 240, 0) 50.26%
              ),
              radial-gradient(
                40.75% 97.37% at 90.75% 40.15%,
                #fffdb1 0%,
                #fee4bf 34.46%,
                #f0bdd0 69.5%,
                rgba(255, 129, 38, 0) 100%
              ),
              linear-gradient(0deg, #c2a6f1, #c2a6f1);

            transition: width 0.3s ease 0s, left 0.3s ease 0s;
          }
        }
      }
    }
  }
`;
