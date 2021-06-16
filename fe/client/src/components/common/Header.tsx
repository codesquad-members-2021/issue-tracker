import React from 'react'
import { useLocation } from 'react-router';
import styled from 'styled-components';
import LogoIcon from '@/Icons/MediumLogo.svg';

const Header = ({ routePaths }: { routePaths: string[] }) => {
  const location = useLocation();

  if (routePaths.indexOf(location.pathname) < 0) return null;
  return (
    <HeaderWrapper>
      <img src={LogoIcon} alt="" />
      <UserIcon
        src='https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png' />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display:flex;
  margin-bottom: 59px;
  justify-content: space-between;
`;

const UserIcon = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export default Header;
