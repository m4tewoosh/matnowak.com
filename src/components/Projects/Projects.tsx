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

import * as S from './Projects.styles';

const Projects: React.FC = () => {
  return (
    <S.StyledProjects id="projects">
      <S.Header>Projects</S.Header>
      <S.ProjectWrapper>
        <S.Description>
          <S.ProjectHeader>
            Containers ERP
            <S.StyledSquare />
          </S.ProjectHeader>
          <p>
            A complex application built for company from Cracow dealing in
            rubble and construction waste removal. From this application, an
            owner gets notified if there is container to pickup, has list of his
            employees, customers, containers, orders and finances such as money
            spend for petrol. Frontend is built with ReactJS and Ant Design.
          </p>
        </S.Description>
        <S.Spacer />
        <S.CarouselWrapper justify="end">
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
        </S.CarouselWrapper>
      </S.ProjectWrapper>
      <S.ProjectWrapper>
        <S.CarouselWrapper justify="start">
          <Carousel showStatus={false} showThumbs={false}>
            <div>
              <img src={r1} />
            </div>
            <div>
              <img src={r2} />
            </div>
          </Carousel>
        </S.CarouselWrapper>
        <S.Spacer />
        <S.Description>
          <S.ProjectHeader>
            Sign Up Application
            <S.StyledSquare />
          </S.ProjectHeader>
          <p>
            Personal app built with React, Ant Design, NodeJS and MongoDB. This
            app allows you to create an account, checks if your username isn't
            taken, email is valid and password is long enough. Validation is
            done using library called react-hook-form. After your account is
            created you can log in to the panel.
          </p>
        </S.Description>
      </S.ProjectWrapper>
    </S.StyledProjects>
  );
};

export default Projects;
