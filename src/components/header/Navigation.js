import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../../assets/images/close-icon.svg';
import NavList from './navList';

const NavContainer = styled.div`
  position: relative;
  top: 20px;
  width: 30px;
  height: 30px;
  z-index: 99999;
`;
const NavBurger = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  cursor: pointer;
  & > div {
    background-color: black;
    width: 30px;
    height: 3px;
    margin: 2px 0;
    border-radius: 3px;
  }
`;

const Navigation = ({ menuSwitcher, setMenuSwitcher }) => (
  <>
    <NavContainer onClick={() => setMenuSwitcher(!menuSwitcher)}>
      <NavBurger>
        <div />
        <div />
        <div />
      </NavBurger>
    </NavContainer>
    {!menuSwitcher && <NavList />}
  </>
);

export default Navigation;
