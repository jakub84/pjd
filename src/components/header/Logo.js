import styled from 'styled-components';
import img from '../../assets/images/jd-logo.svg';

const Logo = styled.div`
  width: 103px;
  height: 105px;
  transform: scale(0.7);
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default Logo;
