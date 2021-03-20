import styled from 'styled-components';

export default styled.input`
  height: ${({theme}) => theme.heightElement};
  border: 1px solid #00000067;
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 0px ${({theme}) => theme.paddingElement};
`;
