import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import Flip from 'react-reveal/Flip';

const bounceAnimation = keyframes`
0 { transform:scale(1, 1);}
40% { transform:scale(1, 0.8);}
60% { transform:scale(1, 1.2);}
100% { transform:scale(1, 1);   background:rgba(0,0,0,0.05);border: 1px solid rgba(0,0,0,0.05);}
`;

const ButtonWrapper = styled.div`
  padding: 15px 30px;
  margin: 20px 10px;
  border: ${props => (props.colored ? '1px solid #fff' : '1px solid #C3C1C1')};
  border-radius: 29px;
  text-transform: uppercase;
  color: ${props => (props.colored ? '#fff' : '#C3C1C1')};
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  line-height: 1.2;
  display: inline-block;
  cursor: pointer;
  &:hover {
    animation: ${bounceAnimation} 0.4s linear forwards;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 10px 20px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    margin: 5px 10px;
    padding: 20px 20px;
  }
`;

const PopupButton = ({
  colored, content, onClick, path,
}) => (
  <Flip left>
    <a href={path} style={{ textDecoration: 'none' }}>
      <ButtonWrapper colored={colored} onClick={onClick}>
        {content}
      </ButtonWrapper>
    </a>
  </Flip>
);

export default PopupButton;
