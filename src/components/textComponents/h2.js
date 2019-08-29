import styled from 'styled-components';

const HeadingH2 = styled.h2`
  font-family: 'main-quicksand-light';
  font-size: 60px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  color: ${props => (props.colored ? '#fff' : '#000')};
  line-height: 1.1;
  text-align:center;

  @media (max-width: 750px) {
    font-size:40px;
    margin-top: 40px;
  }

`;

export default HeadingH2;
