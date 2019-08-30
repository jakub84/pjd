import React, { useState } from 'react';
import styled from 'styled-components';
import ContentCenter from '../helpers/ContentCenter';
import H2 from '../textComponents/h2';
import MainParagraph from '../textComponents/mainParagraph';
import MobileWhiteImg from '../../assets/images/mobile.svg';
import MobileBlackImg from '../../assets/images/mobile-black.svg';
import TechnologyIcon from '../icons/techologyIcon';
import PsIcon from '../../assets/images/ps.svg';
import ReactIcon from '../../assets/images/React-icon.svg';
import RWDIcon from '../../assets/images/rwd.svg';
import LinkButton from '../buttons/LinkButton';

const ProjectWrapper = styled.section`
  padding: 120px 0;
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
  margin:10px 0 30px 0;
`;

const Index = ({ colored }) => (
  <ProjectWrapper colored={colored}>
    <ContentCenter>
      <H2 marginBottom="40px" colored={colored}>
        This is Heading2
      </H2>
      <ButtonContainer>
        <LinkButton colored={colored} content="See on Github" path="#" />
        <LinkButton colored={colored} content="See live version" path="#" />
      </ButtonContainer>
      <ProjectDetails>
        <TechnologiesContaner>
          <TechnologyIcon
            img={PsIcon}
            colored={colored}
            technologyDescription="This is description"
            technologyTitle="Adobe Photoshop"
          />
          <TechnologyIcon
            img={ReactIcon}
            colored={colored}
            technologyDescription="This is description"
            technologyTitle="React.js "
          />
          <TechnologyIcon
            img={RWDIcon}
            colored={colored}
            technologyDescription="This is description"
            technologyTitle="RWD"
          />
        </TechnologiesContaner>

        <ProjecImageContainer>
          <ProjectInfoContainer>This is project name</ProjectInfoContainer>
          <ProjecImage src={colored ? MobileWhiteImg : MobileBlackImg} />
        </ProjecImageContainer>
        <TechnologiesContaner>
          <TechnologyIcon
            img={PsIcon}
            colored={colored}
            technologyDescription="This is description"
            technologyTitle="Adobe Photoshop"
          />
          <TechnologyIcon
            img={PsIcon}
            colored={colored}
            technologyDescription="This is description"
            technologyTitle="Adobe Photoshop"
          />
          <TechnologyIcon
            img={PsIcon}
            colored={colored}
            technologyDescription="This is description"
            technologyTitle="Adobe Photoshop"
          />
        </TechnologiesContaner>
      </ProjectDetails>
    </ContentCenter>
  </ProjectWrapper>
);

export default Index;
