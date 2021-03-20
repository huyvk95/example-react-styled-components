import styled from 'styled-components';

export default styled.p`
  margin: 0px;
  color: ${({theme}) => theme.colorText};
  font-size: ${({theme}) => theme.fontSize};
  font-family: ${({theme}) => theme.fontFamily};
`;
