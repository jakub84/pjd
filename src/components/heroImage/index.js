import React from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import ContentCenter from '../helpers/ContentCenter';
import img from '../../assets/images/hero-image@2x.jpg';
import H1 from '../textComponents/h1';
import H4 from '../textComponents/h4';
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

const TechnologyContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  width:100%;
  margin: 0 auto;
  max-width:700px;

`;

const Technology = styled.span`
  font-family: 'main-quicksand-medium';
  color: #fff;
  padding: 10px 10px;
  border-radius: 15px;
  margin: 10px;
  background-color: ${props => (props.front ? '#B21A3B' : 'rgb(34, 34, 34)')};
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
            <ColorText>Frontend</ColorText> & Design
          </H1>
          <Paragraph>What happens if we combine the skills of the <ColorText>frontend</ColorText> developer with the experience of the <ColorText>designer?</ColorText></Paragraph>

          <H4 marginTop="20px" marginBottom="20px">Skills summary:</H4>
          <TechnologyContainer>
            <Technology front>React.js</Technology>
            <Technology>Adobe Photoshop</Technology>
            <Technology front>Gatsby.js</Technology>
            <Technology>Adobe XD</Technology>
            <Technology front>Styled Components</Technology>
            <Technology>Adobe Illustrator</Technology>
            <Technology front>ES 6</Technology>
            <Technology>Sketch</Technology>
            <Technology front>Scss</Technology>
            <Technology>Adobe Indesign</Technology>
            <Technology front> &nbsp;&nbsp;...&nbsp;&nbsp; </Technology>
          </TechnologyContainer>
        </Bounce>
      </HeroContainer>
    </ContentCenter>
    <Fade bottom>
      <MainImage />
    </Fade>
  </>
);

export default Index;
