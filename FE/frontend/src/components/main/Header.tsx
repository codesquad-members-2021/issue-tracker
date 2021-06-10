import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/logoMedium.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <User />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const User = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  box-sizing: border-box;
`;

export default Header;
