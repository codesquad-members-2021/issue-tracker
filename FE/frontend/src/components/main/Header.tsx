import React from 'react';
import styled from 'styled-components';
import User from '../../styles/atoms/User';
import { ReactComponent as Logo } from '../../icons/logoMedium.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <User />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

export default Header;
