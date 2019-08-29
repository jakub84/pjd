import styled from 'styled-components';

const Description = styled.p`
  font-family: "main-lato";
  font-size: 14px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  color: ${props => (props.colored ? '#fff' : '#404040')};
  line-height: 1.6;
  text-align: center;

  @media (max-width: 400px) {
    display: none;
  }
`;

export default Description;
