import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/logoMedium.svg';

const Header = () => {
  return (
    <HeaerWrapper>
      <Logo />
      <User />
    </HeaerWrapper>
  );
};

const HeaerWrapper = styled.div`
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
