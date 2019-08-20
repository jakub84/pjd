import React from 'react';
import styled from 'styled-components';

const NavListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(178,26,59);
background: radial-gradient(circle, rgba(178,26,59,0.90) 0%, rgba(178,26,59,1) 100%);
  width: 100%;
  height: 100vh;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index: 99998;
`;

const navList = () => (
  <NavListContainer>
    this is navList Component
  </NavListContainer>);

export default navList;
