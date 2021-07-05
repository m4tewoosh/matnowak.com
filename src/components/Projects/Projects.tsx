import styled from 'styled-components';
import containers0 from '../../assets/png/containers/c0.png';
import containers1 from '../../assets/png/containers/c1.png';
import containers2 from '../../assets/png/containers/c2.png';
import containers3 from '../../assets/png/containers/c3.png';
import containers4 from '../../assets/png/containers/c4.png';
import containers5 from '../../assets/png/containers/c5.png';
import containers6 from '../../assets/png/containers/c6.png';
import containers7 from '../../assets/png/containers/c7.png';
import r1 from '../../assets/png/register/r1.png';
import r2 from '../../assets/png/register/r2.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import media from '../../styles/media';
import { start } from 'repl';

import { ReactComponent as Square } from '../../assets/svg/circlesSquare.svg';

const StyledProjects = styled.section`
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

const StyledSquare = styled(Square)`
  position: absolute;
  top: -3rem;
  left: -2rem;
  z-index: 9000;
  /* background-color: red; */
  rect {
    fill: black;
  }
  @media ${media.mobileL} {
    /* font-size: 4.8rem; */
    top: -5rem;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;
  @media ${media.tabletL} {
    flex-direction: column;
    align-items: center;
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`;
const Description = styled.div`
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

const Spacer = styled.div`
  flex: 1;
  min-width: 5rem;
  max-width: 10rem;
`;

const CarouselWrapper = styled.div<{ justify: String }>`
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

const Header = styled.h2`
  color: #181333;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 10rem;
  text-align: center;
`;

const ProjectHeader = styled.h2`
  position: relative;
  color: #181333;
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Projects: React.FC = () => {
  return (
    <StyledProjects id="projects">
      <Header>Projects</Header>
      {/* <ProjectsSection> */}

      <ProjectWrapper>
        <Description>
          <ProjectHeader>
            Containers ERP
            <StyledSquare />
          </ProjectHeader>
          <p>
            A complex application built for company from Cracow dealing in
            rubble and construction waste removal. From this application, an
            owner gets notified if there is container to pickup, has list of his
            employees, customers, containers, orders and finances such as money
            spend for petrol. Frontend is built with ReactJS and Ant Design.
          </p>
        </Description>
        <Spacer />
        <CarouselWrapper justify="end">
          <Carousel showStatus={false} showThumbs={false}>
            <div>
              <img src={containers0} />
            </div>
            <div>
              <img src={containers1} />
            </div>
            <div>
              <img src={containers2} />
            </div>
            <div>
              <img src={containers3} />
            </div>
            <div>
              <img src={containers4} />
            </div>
            <div>
              <img src={containers5} />
            </div>
            <div>
              <img src={containers6} />
            </div>
            <div>
              <img src={containers7} />
            </div>
          </Carousel>
        </CarouselWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <CarouselWrapper justify="start">
          <Carousel showStatus={false} showThumbs={false}>
            <div>
              <img src={r1} />
            </div>
            <div>
              <img src={r2} />
            </div>
          </Carousel>
        </CarouselWrapper>
        <Spacer />
        <Description>
          <ProjectHeader>
            Sign Up Application
            <StyledSquare />
          </ProjectHeader>
          <p>
            Personal app built with React, Ant Design, NodeJS and MongoDB. This
            app allows you to create an account, checks if your username isn't
            taken, email is valid and password is long enough. Validation is
            done using library called react-hook-form. After your account is
            created you can log in to the panel.
          </p>
        </Description>
      </ProjectWrapper>
    </StyledProjects>
  );
};

export default Projects;
