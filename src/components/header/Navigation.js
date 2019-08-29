import React from 'react';
import styled from 'styled-components';
import NavList from './navList';

const NavContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99999;
  min-width:100px;
  padding:10px 20px; 
  background:rgba(255,255,255,0.95);
  cursor: pointer;

`;
const NavBurger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: rgb(178,26,59);
  font-size:16px;
  
`;

const Navigation = ({ menuSwitcher, setMenuSwitcher }) => (
  <>
    <NavContainer onClick={() => setMenuSwitcher(!menuSwitcher)}>
      <NavBurger>{menuSwitcher ? 'Profile' : 'webSite'}</NavBurger>
    </NavContainer>
    {!menuSwitcher && <NavList />}
  </>
);

export default Navigation;
