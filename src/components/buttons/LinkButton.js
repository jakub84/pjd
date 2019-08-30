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
  margin: 20px 10px;
  border: ${props => (props.colored ? '3px solid #fff' : '3px solid #C3C1C1')};
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
