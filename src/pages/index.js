import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import HeroImage from '../components/heroImage';
import ProjectsPortfolio from '../components/projectPortfolio';
import FrontProject from '../components/projectPortfolio/frontProject';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HeroImage />
    <ProjectsPortfolio>
      <FrontProject colored />
      <FrontProject />
    </ProjectsPortfolio>
  </Layout>
);

export default IndexPage;
