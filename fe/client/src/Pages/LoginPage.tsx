import React from 'react'
import styled from 'styled-components';
import LargeLogo from '@/Icons/LargeLogo.svg';

const LoginPage = () => {
  return (
    <LoginFormWrapper>
      <LogoWrapper>
        <img src={LargeLogo} alt="" />
      </LogoWrapper>
      <LoginButton>
        GitHub 계정으로 로그인
      </LoginButton>
    </LoginFormWrapper>
  )
}


const LoginFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`;

const LogoWrapper = styled.div`
  margin-bottom:60px;
`;

const LoginButton = styled.button`
  width: 340px;
  height: 64px;
  padding: 0px 24px;
  margin-bottom: 2rem;
  color: #fff;
  border-radius: 20px;
  background: #14142B;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  &:hover { 
    cursor:pointer;
  }
`;
export default LoginPage;
