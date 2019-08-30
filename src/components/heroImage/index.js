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

  @media screen and (max-width: 400px) {
    margin-bottom:0;
  }
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
          <H1 marginBottom="40px">
            Hi this is <ColorText>HEADLINE</ColorText>
          </H1>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit ac mauris luctus consectetur. Maecenas quis porttitor tortor, a tincidunt sapien. Aenean interdum sed arcu non ultricies.  <ColorText>Fusce blandit.</ColorText></Paragraph>
        </Bounce>
      </HeroContainer>
    </ContentCenter>
    <Fade bottom>
      <MainImage />
    </Fade>
  </>
);

export default Index;
