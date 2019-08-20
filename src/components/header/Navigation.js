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
  /* border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  border: 1px solid rgba(0,0,0,0.15); */
  cursor: pointer;

`;
const NavBurger = styled.div`
  /* position: fixed; */
  /* right: 20px; */
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
