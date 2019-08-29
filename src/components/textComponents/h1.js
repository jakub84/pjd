import styled from 'styled-components';

const HeadingH1 = styled.h1`
  font-family: 'main-quicksand-bold';
  font-size: 60px;
  color:'#000';
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  line-height: 1.4;
  text-align:center;

  @media (max-width: 750px) {
    font-size:40px;
    margin-top: 40px;
  }

`;

export default HeadingH1;
