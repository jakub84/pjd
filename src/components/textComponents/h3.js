import styled from 'styled-components';

const HeadingH3 = styled.h3`
  font-family: 'main-Black';
  font-size: 60px;
  color:'#171738';
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  line-height: 1.1;
  text-align:center;

  @media (max-width: 750px) {
    font-size:40px;
    margin: 30px 0;
  }
`;

export default HeadingH3;
