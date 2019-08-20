import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import HeroImage from '../components/heroImage';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HeroImage headline="this is headline" paragraph="this is paragraph" />
  </Layout>
);

export default IndexPage;
