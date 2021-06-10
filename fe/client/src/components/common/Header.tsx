import React from 'react'
import styled from 'styled-components';
import LogoIcon from '@/Icons/MediumLogo.svg';
import { useLocation } from 'react-router';

const exclusionArray  = ['/issueList', '/createIssue'];

const Header = () => {
  const location = useLocation();

  if(exclusionArray.indexOf(location.pathname) < 0) return null;

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
  justify-content: space-between;
`;

const UserIcon = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export default Header;
