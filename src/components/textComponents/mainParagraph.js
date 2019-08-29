import styled from 'styled-components';

const mainParagraph = styled.p`
  font-family: "main-lato";
  font-size: 18px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  color: ${props => (props.colored ? '#fff' : '#404040')};
  line-height: 1.8;
  text-align: center;

  @media (max-width: 750px) {
  font-size:16px;
  margin-bottom: 30px;
  }
`;

export default mainParagraph;
