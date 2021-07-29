import styled from 'styled-components';
import media from '../../styles/media';

export const StyledHeader = styled.header<{ scroll: number }>`
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 23rem;
  height: 7rem;
  background-color: ${({ scroll }) =>
    scroll >= window.innerHeight && '#181333'};
  transition: background-color 1s;
  @media ${media.tabletL} {
    background-color: unset;
    width: 100%;
    padding: 0;
    justify-content: center;
  }
  @media ${media.laptopL} {
    width: 100%;
    padding: 2rem;
    justify-content: flex-end;
  }
`;
