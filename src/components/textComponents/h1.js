import styled from 'styled-components';

const HeadingH1 = styled.h1`
  font-family: 'main-quicksand-bold';
  font-size: 60px;
  color:'#000';
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  line-height: 1.1;
  text-align:center;

  @media (max-width: 750px) {
    font-size:60px;
  }

  @media (max-width: 500px) {
    font-size:50px;
  }

  @media (max-width: 280px) {
    font-size:40px;
  }

`;

export default HeadingH1;
