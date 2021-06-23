import styled from 'styled-components';
import media from '../../styles/media';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 23rem;
  height: 11rem;

  @media ${media.tabletL} {
    width: 100%;
    padding: 0;
    justify-content: center;
  }
  @media ${media.tablet} {
    width: 100%;
    padding: 2rem;
    justify-content: flex-end;
  }
`;
