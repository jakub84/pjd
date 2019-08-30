import React from 'react';
import styled, { keyframes } from 'styled-components';
import ContentCenter from '../helpers/ContentCenter';
import gitIcon from '../../assets/images/github-black.svg';
import lnIcon from '../../assets/images/linkedin-logo.svg';
import Color from '../textComponents/colorBold';

const bounceAnimation = keyframes`
0 { transform:scale(1, 1);}
40% { transform:scale(1, 0.8);}
60% { transform:scale(1, 1.2);}
100% { transform:scale(1, 1);}
`;

const FooterWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InfoFooter = styled.section`
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkImage = styled.a`
  margin: 0 20px;
  display: inline-block;
  /* height: 30px; */
  padding:20px;
  font-size: 18px;
  font-family:"main-quicksand-bold";
  color:#000;
  text-decoration:none;
  &:hover {
    animation: ${bounceAnimation} 0.4s linear forwards;
  }
  img {
    height: 100%;
  }
`;

const Separator = styled.span`
display:inline-block;
width:1px;
height:30px;
background-color: #000;

@media (max-width: 611px) {
    :last-of-type {
      display:none;
    }
  }

  @media (max-width: 335px) {

      display:none;

  }
`;

const CopyRight = styled.div`
  background-color: #000;
  width: 100%;
  padding: 20px 0;
  font-size: 12px;
  color: #919191;
`;

const Index = () => (
  <>
    <FooterWrapper>
      <ContentCenter>
        <InfoFooter>
          <LinkImage href="https://github.com/jakub84">
            <img src={gitIcon} alt="Github" />
          </LinkImage>
          <Separator />
          <LinkImage href="https://www.linkedin.com/in/jakub-dobrowolski-14091a77/">
            <img src={lnIcon} alt="Linkedin" />
          </LinkImage>
          <Separator />
          <LinkImage href="mailto:jakub.d84@gmail.com">
            jakub.d84@<Color>gmail.com</Color>
          </LinkImage>
        </InfoFooter>
      </ContentCenter>
    </FooterWrapper>
    <CopyRight>Copyright © 2018 Jakub Dobrowolski</CopyRight>
  </>
);

export default Index;
