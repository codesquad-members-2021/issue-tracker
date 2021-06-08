import { Avatar } from '@chakra-ui/react';
import styled from 'styled-components';
import { ReactComponent as LogotypeMedium } from '@assets/LogotypeMedium.svg';

function Header() {
  return (
    <HeaderContainer>
      <LogotypeMedium className="logo" />
      <Avatar size="md" src="./janmang.jpeg" />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 200px;
  }
`;
