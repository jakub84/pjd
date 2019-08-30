import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import Flip from 'react-reveal/Flip';

const bounceAnimation = keyframes`
0 { transform:scale(1, 1);}
40% { transform:scale(1, 0.8);}
60% { transform:scale(1, 1.2);}
100% { transform:scale(1, 1); background-color: #B21A3B; color:#fff; }
`;

const ButtonWrapper = styled.div`
  padding: 15px 30px;
  margin:30px 0;
  border: 1px solid #B21A3B;
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

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 10px 20px;
  }
`;

const PopupButton = ({ content, onClick }) => (
  <Flip left>
    <ButtonWrapper onClick={onClick}>{content}</ButtonWrapper>
  </Flip>
);

export default PopupButton;
