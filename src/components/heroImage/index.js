import React from 'react';
import styled from 'styled-components';
import ContentCenter from '../helpers/ContentCenter';
import img from '../../assets/images/hero-image@2x.jpg';

const HeroContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
`;

const MainHeadline = styled.h1`
  text-align: center;
  font-family: "main-black";
  font-size: 60px;
  margin-bottom: 40px;
  text-transform: uppercase;

  @media screen and (max-width: 400px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;
const Paragraph = styled.p`
  text-align: center;
  font-family: "main";
  font-size: 18px;
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

const Index = ({ headline, paragraph }) => (
  <>
    <ContentCenter>
      <HeroContainer>
        <MainHeadline>{headline}</MainHeadline>
        <Paragraph>{paragraph}</Paragraph>
      </HeroContainer>
    </ContentCenter>
    <MainImage />
  </>
);

export default Index;
