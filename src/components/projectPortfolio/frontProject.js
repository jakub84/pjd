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
import materialLogo from '../../assets/images/material-ui-logo.svg';

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
  material,
  styledcomponent,
}) => (
  <ProjectWrapper colored={colored}>
    <ContentCenter>
      <Fade left={colored} right={!colored}>
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
              technologyDescription="Software that is extensively used for raster image editing, graphic design and digital art"
              technologyTitle="Adobe Photoshop"
            />
            )}

            {ai && (
            <TechnologyIcon
              img={aiIcon}
              colored={colored}
              technologyDescription="Vector graphics editing program published by Adobe. It is useful for designing logos, clip art, blueprints, and other precise, resolution-independent illustrations."
              technologyTitle="Adobe Illustrator"
            />
            )}
            {xd && (
            <TechnologyIcon
              img={xdIcon}
              colored={colored}
              technologyDescription="XD empowers designers with the speed, precision, and quality to seamlessly iterate and share interactive prototypes with team members and reviewers across devices and platforms, including Windows, Mac, iOS, and Android."
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
              technologyDescription="Library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time."
              technologyTitle="React.js "
            />
            )}
            {html && (
            <TechnologyIcon
              img={htmlIcon}
              colored={colored}
              technologyDescription="Hypertext Markup Language revision 5 (HTML5) is markup language for the structure and presentation of World Wide Web contents. HTML5 supports the traditional HTML and XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling."
              technologyTitle="html"
            />
            )}
            {rwd && (
            <TechnologyIcon
              img={RWDIcon}
              colored={colored}
              technologyDescription="Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it. RWD is one approach to the problem of designing for the multitude of devices available to customers, ranging from tiny phones to huge desktop monitors."
              technologyTitle="RWD"
            />
            )}
            {sass && (
            <TechnologyIcon
              img={sassIcon}
              colored={colored}
              technologyDescription="Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins "
              technologyTitle="Sass"
            />
            )}
            {styledcomponent && (
            <TechnologyIcon
              colored={colored}
              technologyDescription="Styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc."
              technologyTitle="Styled-components"
            />
            )}
            {material && (
            <TechnologyIcon
              img={materialLogo}
              colored={colored}
              technologyDescription="React components for faster and easier web development"
              technologyTitle="Material UI"
            />
            )}
          </TechnologiesContaner>
        </ProjectDetails>
      </Fade>
    </ContentCenter>
  </ProjectWrapper>
);

export default frontProject;
