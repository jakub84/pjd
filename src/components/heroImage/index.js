import React from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import ContentCenter from '../helpers/ContentCenter';
import img from '../../assets/images/hero-image@2x.jpg';
import H1 from '../textComponents/h1';
import Paragraph from '../textComponents/mainParagraph';
import ColorText from '../textComponents/colorBold';

const HeroContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
`;

const MainImage = styled.div`
  width: 100%;
  height: 840px;
  background: url(${img});
  background-repeat: no-repeat no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: transparent;
  @media screen and (max-width: 1440px) {
    height: 600px;
  }
  @media screen and (max-width: 900px) {
    height: 400px;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;

const Index = () => (
  <>
    <ContentCenter>
      <HeroContainer>
        <Bounce>
          <H1>
            Hi this is <ColorText>headline</ColorText>
          </H1>
          <Paragraph>and this is <ColorText>Paragraph</ColorText></Paragraph>
        </Bounce>
      </HeroContainer>
    </ContentCenter>
    <Fade bottom>
      <MainImage />
    </Fade>
  </>
);

export default Index;
