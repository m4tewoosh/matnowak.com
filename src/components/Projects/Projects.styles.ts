import styled from 'styled-components';
import media from '../../styles/media';
import { ReactComponent as Square } from '../../assets/svg/circlesSquare.svg';

export const StyledProjects = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 20rem;

  > img {
    width: 60rem;
  }

  @media ${media.laptopL} {
    padding: 5rem 10rem;
  }
  @media ${media.mobileL} {
    padding: 5rem 6rem;
  }
  @media ${media.mobileS} {
    padding: 5rem 4rem;
  }
`;

export const StyledSquare = styled(Square)`
  position: absolute;
  top: -3rem;
  left: -2rem;
  z-index: 9000;
  rect {
    fill: black;
  }
  @media ${media.mobileL} {
    top: -5rem;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;

  @media ${media.desktopL} {
    max-width: 100%;
  }
  @media ${media.tabletL} {
    flex-direction: column;
    align-items: center;
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  > p {
    font-size: 1.8rem;
    color: #181333;
    text-align: justify;
    @media ${media.tabletL} {
      margin-bottom: 3rem;
    }
  }
`;

export const Spacer = styled.div`
  flex: 1;
  min-width: 5rem;
  max-width: 10rem;
`;

export const CarouselWrapper = styled.div<{ justify: String }>`
  flex: 1;
  display: flex;
  justify-content: ${({ justify }) =>
    justify === 'start' ? 'flex-start' : 'flex-end'};

  .carousel {
    max-width: 50rem;
    border-radius: 10px;
  }

  img {
    width: 50px;
  }

  > div {
    border-radius: 2rem;
  }
`;

export const Header = styled.h2`
  color: #181333;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 10rem;
  text-align: center;
`;

export const ProjectHeader = styled.h2`
  position: relative;
  color: #181333;
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
