import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.section`
  overflow: hidden;
  display: inline-block;
  width: 25%;
  height: auto;
  border: 1px solid lightgrey;

  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width:100%;
  }
`;

const ImageProject = styled.img`
  width: 100%;
  :hover {
    transform:scale(1.5) rotate(20deg);
  }
`;

const GraphicProject = ({ src }) => (
  <ProjectWrapper>
    <ImageProject src={src} />
  </ProjectWrapper>
);

export default GraphicProject;
