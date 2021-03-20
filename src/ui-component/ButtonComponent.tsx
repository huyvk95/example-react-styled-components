import styled, {css} from 'styled-components';

export default styled.button`
  border: unset;
  box-shadow: unset;
  cursor: pointer;
  height: ${({theme}) => theme.heightElement};
  background: ${({theme}) => theme.colorPrimary};
  border-radius: ${({theme}) => theme.borderRadius};
  color: ${({theme}) => theme.colorTextButton};
  font-size: ${({theme}) => theme.fontSize};
  font-family: ${({theme}) => theme.fontFamily};
  text-align: center;
`;
