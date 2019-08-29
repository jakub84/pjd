import React from 'react';
import styled from 'styled-components';
import '../styles/reset.css';
import '../styles/global.css';

const SiteContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const Layout = ({ children }) => (
  <SiteContentWrapper>
    {children}
  </SiteContentWrapper>
);

export default Layout;
