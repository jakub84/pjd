import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './Logo';
import ContentCenter from '../helpers/ContentCenter';
import Navigation from './Navigation';

const HeaderWrapper = styled.header`
  border-top: 5px solid #b21a3b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const LogoContainer = styled.div`
  width: 103px;
  border-bottom-right-radius: 40px;
  background-color: #b21a3b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 5px 0 5px;

  @media screen and (max-width: 400px) {
    transform: scale(0.8) translateY(-30px);
  }
`;

const Index = () => {
  const [menuSwitcher, setMenuSwitcher] = useState(true);
  return (
    <HeaderWrapper>
      <ContentCenter rowDirection>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>
        <Navigation
          menuSwitcher={menuSwitcher}
          setMenuSwitcher={setMenuSwitcher}
        />
      </ContentCenter>
    </HeaderWrapper>
  );
};

export default Index;