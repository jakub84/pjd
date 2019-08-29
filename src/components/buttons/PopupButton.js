import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import Flip from 'react-reveal/Flip';

const bounceAnimation = keyframes`
0 { transform:scale(1, 1);}
40% { transform:scale(0.95, 1);}
60% { transform:scale(1.05, 1); box-shadow: 0 9px 14px rgba(87, 76, 173, 0.27);}
100% { transform:scale(1, 1); background-color: #000;border: 3px solid #000; color: #fff;  box-shadow: 0 9px 14px rgba(87, 76, 173, 0.27);}
`;

const ButtonWrapper = styled.div`
  padding: 15px 30px;
  margin:30px 0;
  border: 3px solid #B21A3B;
  border-radius: 29px;
  box-shadow: 0 9px 14px rgba(173, 76, 76, 0.27);
  text-transform: uppercase;
  color: #B21A3B !important;
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
`;

const PopupButton = ({ content, onClick }) => (
  <Flip left>
    <ButtonWrapper onClick={onClick}>{content}</ButtonWrapper>
  </Flip>
);

export default PopupButton;
