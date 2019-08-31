import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import HeroImage from '../components/heroImage';
import ProjectsPortfolio from '../components/projectPortfolio';
import GraphicProject from '../components/projectPortfolio/graphicProject';
import Footer from '../components/footer';
import paqj from '../assets/images/graphicProjects/paqj.jpg';
import galeria from '../assets/images/graphicProjects/galeria-obrazu.jpg';
import ff from '../assets/images/graphicProjects/frozen-frame.jpg';
import boomerSky from '../assets/images/graphicProjects/boomer-sky.jpg';
import bistecca from '../assets/images/graphicProjects/bistecca.jpg';
import galeriaWeb from '../assets/images/graphicProjects/galeria-web.jpg';
import piwomaniak from '../assets/images/graphicProjects/piwomaniak-web.jpg';
import mundial from '../assets/images/graphicProjects/mundial.jpg';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HeroImage />
    <ProjectsPortfolio frontend />
    <ProjectsPortfolio>
      <GraphicProject src={paqj} />
      <GraphicProject src={galeria} />
      <GraphicProject src={ff} />
      <GraphicProject src={boomerSky} />
      <GraphicProject src={bistecca} />
      <GraphicProject src={galeriaWeb} />
      <GraphicProject src={piwomaniak} />
      <GraphicProject src={mundial} />

    </ProjectsPortfolio>
    <Footer />
  </Layout>
);

export default IndexPage;
