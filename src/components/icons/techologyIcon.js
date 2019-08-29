import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Description from '../textComponents/description';
import PopupWindow from '../popupWindow';

const showDescriptionAnimation = keyframes`
0 { transform:scale(1, 1);}
40% { transform:scale(1, 0.8);}
60% { transform:scale(1, 1.2);}
100% { display:flex; transform:scale(1, 1);}
`;

const TechnologyWrapper = styled.section`
  display: inline-block;
  padding: 30px;
  border-radius: 20px;
  overflow: hidden;
  height: inherit;
  @media (max-width: 1000px) {
    padding:10px;
  }

  @media (max-width: 400px) {
    padding:0;
    transform: scale(0.8);
    margin:-10px;
  }
  cursor: pointer;
  :hover {
    animation: ${showDescriptionAnimation} 0.4s linear forwards;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  overflow: hidden;
  height: 60px;
  width: 60px;
  transition: all 0.2s;
`;

const ImageWhite = styled.img`
  overflow: hidden;
  height: 60px;
  width: 60px;
  transition: all 0.2s;
  filter: brightness(5);
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: ${props => (props.colored ? '1px solid #fff' : '1px solid #C3C1C1')};
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  overflow: hidden;

  @media (max-width: 750px) {
    transform: scale(0.8);
    margin: 0px;
  }
`;

const Icon = ({
  img, technology, colored, technologyDescription, technologyTitle,
}) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      {isVisible && (
        <PopupWindow
          img={img}
          technologyDescription={technologyDescription}
          technologyTitle={technologyTitle}
          onClick={() => setVisible(false)}
        />
      )}
      <TechnologyWrapper onClick={() => setVisible(true)}>
        <IconContainer colored={colored}>
          <ImageContainer>
            {colored ? (
              <ImageWhite src={img} alt={technology} />
            ) : (
              <Image src={img} alt={technology} />
            )}
          </ImageContainer>
        </IconContainer>
        <Description>{technologyTitle}</Description>
      </TechnologyWrapper>
    </>
  );
};

export default Icon;
