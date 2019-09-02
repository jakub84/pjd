import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import CloseButton from '../buttons/PopupButton';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000cb;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  html,
  body {
    overflow: hidden;
  }
`;

const PopupContent = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: 80%;
  max-height: 80vh;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 10px 30px;
`;

const PopupHeading = styled.h3`
  font-family: "main-quicksand-medium";
  color: #868686 !important;
  margin: 10px 0;
  font-size: 24px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const PopupParagraph = styled.p`
  font-family: "main-lato";
  color: #868686 !important;
  margin: 10px 0 30px 0;
  font-size: 14px;
  line-height:1.6;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const TechnologyImage = styled.img`
  box-sizing: content-box;
  width: 80px;
  height: 80px;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
    margin: 0 0 10px 0;
  }
`;

function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}

const PopupWindow = ({
  img,
  technologyDescription,
  technologyTitle,
  onClick,
}) => {
  useLockBodyScroll();
  return (
    <>
      <PopupContainer onClick={onClick}>
        <PopupContent>
          <TechnologyImage src={img} alt={technologyTitle} />
          <PopupHeading>{technologyTitle}</PopupHeading>
          <PopupParagraph marginBottom="20px">{technologyDescription}</PopupParagraph>
          {/* <CloseButton closedBtn onClick={onClick} /> */}
          <CloseButton onClick={onClick} content="Close me" />
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default PopupWindow;
