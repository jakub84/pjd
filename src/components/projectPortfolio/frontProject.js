import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ContentCenter from '../helpers/ContentCenter';
import H2 from '../textComponents/h2';
import MobileWhiteImg from '../../assets/images/mobile.svg';
import MobileBlackImg from '../../assets/images/mobile-black.svg';
import TechnologyIcon from '../icons/techologyIcon';
import PsIcon from '../../assets/images/ps.svg';
import aiIcon from '../../assets/images/ai.svg';
import xdIcon from '../../assets/images/xd.svg';
import selfdesignedIcon from '../../assets/images/design.svg';
import ReactIcon from '../../assets/images/React-icon.svg';
import RWDIcon from '../../assets/images/rwd.svg';
import htmlIcon from '../../assets/images/html-5-logo.svg';
import sassIcon from '../../assets/images/sass.svg';
import LinkButton from '../buttons/LinkButton';

const ProjectWrapper = styled.section`
  padding: 120px 0;
  width: 100%;
  overflow: hidden;
  display: inline-block;
  background-color: ${props => (props.colored ? '#B21A3B' : '#fff')};
  * {
    color: ${props => (props.colored ? '#fff' : '#404040')};
  }
  @media (max-width: 600px) {
    padding: 60px 0 120px 0;
  }
  @media (max-width: 350px) {
    padding: 30px 0 120px 0;
  }
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ProjecImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 30%;
  margin-top: 40px;
  @media (max-width: 1000px) {
    order: 2;
    width: 80%;
    height: 50vw;
    align-items: flex-start;
    margin-bottom: -120px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ProjectInfoContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    height: 100%;
    transform: translateY(20%);
  }
`;

const ProjecImage = styled.img`
  width: 100%;
`;

const TechnologiesContaner = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: row;
    min-height: inherit;
    flex-wrap: wrap;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0 30px 0;
`;

const frontProject = ({
  colored,
  name,
  github,
  live,
  ps,
  rjs,
  rwd,
  ai,
  xd,
  html,
  sass,
  selfdesigned,
  heroImage,
}) => (
  <ProjectWrapper colored={colored}>
    <ContentCenter>
      <Fade left>
        <H2 marginBottom="40px" colored={colored}>
          {name}
        </H2>
        <ButtonContainer>
          {github && <LinkButton colored={colored} content="See on Github" path={github} />}
          {live && <LinkButton colored={colored} content="See live version" path={live} />}
        </ButtonContainer>
        <ProjectDetails>
          <TechnologiesContaner>
            {ps && (
              <TechnologyIcon
                img={PsIcon}
                colored={colored}
                technologyDescription="Design was created in Adobe Photoshop from scratch"
                technologyTitle="Adobe Photoshop"
              />
            )}

            {ai && (
              <TechnologyIcon
                img={aiIcon}
                colored={colored}
                technologyDescription="Elements like logos, icons etc was created in Adobe Illustrator"
                technologyTitle="Adobe Illustrator"
              />
            )}
            {xd && (
              <TechnologyIcon
                img={xdIcon}
                colored={colored}
                technologyDescription="Design was created in Adobe XD from scratch"
                technologyTitle="Adobe XD"
              />
            )}
            {selfdesigned && (
              <TechnologyIcon
                img={selfdesignedIcon}
                colored={colored}
                technologyDescription="Designed and developed from scratch"
                technologyTitle="Self Designed"
              />
            )}
          </TechnologiesContaner>

          <ProjecImageContainer>
            <ProjectInfoContainer>{heroImage}</ProjectInfoContainer>
            <ProjecImage src={colored ? MobileWhiteImg : MobileBlackImg} />
          </ProjecImageContainer>
          <TechnologiesContaner>
            {rjs && (
              <TechnologyIcon
                img={ReactIcon}
                colored={colored}
                technologyDescription="Developed in React.js"
                technologyTitle="React.js "
              />
            )}
            {html && (
              <TechnologyIcon
                img={htmlIcon}
                colored={colored}
                technologyDescription="Develped in html5 and css3"
                technologyTitle="html"
              />
            )}
            {rwd && (
              <TechnologyIcon
                img={RWDIcon}
                colored={colored}
                technologyDescription="Project is responive"
                technologyTitle="RWD"
              />
            )}
            {sass && (
              <TechnologyIcon
                img={sassIcon}
                colored={colored}
                technologyDescription="Developed in Sass"
                technologyTitle="sass"
              />
            )}
          </TechnologiesContaner>
        </ProjectDetails>
      </Fade>
    </ContentCenter>
  </ProjectWrapper>
);

export default frontProject;
