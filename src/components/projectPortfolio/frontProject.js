import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ContentCenter from '../helpers/ContentCenter';
import H2 from '../textComponents/h2';
import MobileWhiteImg from '../../assets/images/mobile-no-bg.svg';
import MobileBlackImg from '../../assets/images/mobile-black-no-bg.svg';
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

const ProjecImage = styled.img`
  width: 100%;
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50px;
  box-shadow: 0 9px 14px rgba(0, 0, 0, 0.27);
  @media (max-width: 1000px) {
    border-radius: 120px;
  }

  @media (max-width: 900px) {
    border-radius: 100px;
  }

  @media (max-width: 700px) {
    border-radius: 75px;
  }

  @media (max-width: 600px) {
    border-radius: 65px;
  }

  @media (max-width: 500px) {
    border-radius: 55px;
  }

  @media (max-width: 400px) {
    border-radius: 50px;
  }
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
  heroImage,
  selfdesigned,
}) => {
  return (
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
              <ProjecImage
                src={colored ? MobileWhiteImg : MobileBlackImg}
                style={{ backgroundImage: `url(${heroImage})` }}
              />
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
};

export default frontProject;
