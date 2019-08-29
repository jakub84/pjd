import styled from 'styled-components';

const ContentCenter = styled.div`
  width: 100%;
  padding:0 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  box-sizing: border-box;
  position:relative;
  flex-direction: ${props => (props.rowDirection ? 'row' : 'column')};
  justify-content: ${props => (props.Center ? 'center' : 'space-between')};
`;

export default ContentCenter;
