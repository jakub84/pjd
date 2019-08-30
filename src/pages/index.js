import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import HeroImage from '../components/heroImage';
import ProjectsPortfolio from '../components/projectPortfolio';
import GraphicProject from '../components/projectPortfolio/graphicProject';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HeroImage />
    <ProjectsPortfolio frontend />
    <ProjectsPortfolio>
      <GraphicProject />
      <GraphicProject />
      <GraphicProject />
      <GraphicProject />
    </ProjectsPortfolio>
    <Footer />
  </Layout>
);

export default IndexPage;
