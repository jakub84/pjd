import React from 'react';
import styled from 'styled-components';
import data from '../../source/frontProjectData';
import FrontProject from './frontProject';

const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Index = ({ frontend, children }) => (
  <>
    {frontend && (
    <PortfolioWrapper>
      {data.map(singleProject => (
        <FrontProject
          key={singleProject.id}
          colored={singleProject.id % 2}
          name={singleProject.name}
          github={singleProject.github}
          live={singleProject.live}
          ps={singleProject.technologies[0].photoshop}
          ai={singleProject.technologies[0].illustrator}
          xd={singleProject.technologies[0].xd}
          rjs={singleProject.technologies[0].rjs}
          rwd={singleProject.technologies[0].rwd}
          html={singleProject.technologies[0].html}
          sass={singleProject.technologies[0].sass}
          selfdesigned={singleProject.technologies[0].selfdesigned}
          styledcomponent={singleProject.technologies[0].styledcomponent}
          heroImage={singleProject.heroImage}
        />
      ))}
    </PortfolioWrapper>
    )}
    <PortfolioWrapper>{children}</PortfolioWrapper>
  </>
);

export default Index;
