import styled from 'styled-components';
import containers1 from '../../assets/png/containers/containers1.png';
import containers2 from '../../assets/png/containers/containers2.png';
import containers3 from '../../assets/png/containers/containers3.png';

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 23rem;
`;

const Header = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 10rem;
`;

const ProjectsSection = styled.div`
  width: 100%;
`;

const Project1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutProject = styled.section`
  flex: 2;
`;

const ProjectPhotos = styled.div`
  flex: 3;
  padding: 2rem;
  height: 600px;
  border-radius: 20px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  /* width: 100%; */
  img {
    width: 40%;
  }
`;

const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <Header>Projects</Header>
      <ProjectsSection>
        <Project1>
          <AboutProject>
            <Header>Containers ERP</Header>
          </AboutProject>
          <ProjectPhotos>
            <img src={containers1} alt="" />
            <img src={containers2} alt="" />
            <img src={containers3} alt="" />
          </ProjectPhotos>
        </Project1>
      </ProjectsSection>
    </StyledProjects>
  );
};

export default Projects;
