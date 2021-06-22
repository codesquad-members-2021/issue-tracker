import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

import { ReactComponent as LogoLarge } from '@assets/LogotypeLarge.svg';
import { LOGIN_URL } from '@const/var';
import fetchToken from './fetchToken';
import { isLoginState, loginInfoState } from '@store/atoms/login';
import {
  gitLoginStyle,
  activeLoginStyle,
  inactiveLoginStyle,
  inputStyle,
} from './style';

function LoginMain() {
  const [isLoginActive, setIsActiveLogin] = useState(false);
  const [isInputtedID, setIsInputtedID] = useState(false);
  const [isInputtedPW, setIsInputtedPW] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const setLoginInfo = useSetRecoilState(loginInfoState);
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleChangeID = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (!isInputtedID && target.value.length > 0) setIsInputtedID(true);
    else if (isInputtedID && target.value.length === 0) setIsInputtedID(false);
  };

  const handleChangePW = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    target.value.length > 0 ? setPassword(target.value) : setPassword('');
    if (!isInputtedPW && target.value.length > 0) setIsInputtedPW(true);
    else if (isInputtedPW && target.value.length === 0) setIsInputtedPW(false);
  };

  useEffect(() => {
    if (isInputtedID && isInputtedPW) setIsActiveLogin(true);
    else setIsActiveLogin(false);
  }, [isInputtedID, isInputtedPW]);

  useEffect(() => {
    const { code } = queryString.parse(window.location.search);
    if (!code) return;
    else if (typeof code === 'string' && !isLogin) {
      fetchToken({ setIsLogin, setLoginInfo, code, history });
    }
  }, []);

  return (
    <MainWrap>
      <LogoLarge className="logo" />
      <LinkBox as="div">
        <Button {...gitLoginStyle}>
          <LinkOverlay href={LOGIN_URL}>GitHub 계정으로 로그인</LinkOverlay>
        </Button>
      </LinkBox>
      <Span>or</Span>
      <Stack spacing={2}>
        <Input {...inputStyle} placeholder="아이디" onChange={handleChangeID} />
        <Input
          {...inputStyle}
          type="password"
          placeholder="비밀번호"
          onChange={handleChangePW}
        />
      </Stack>
      <Link to="issues">
        {isLoginActive ? (
          <Button {...activeLoginStyle}>아이디로 로그인</Button>
        ) : (
          <Button {...inactiveLoginStyle}>아이디로 로그인</Button>
        )}
      </Link>
      <Register>회원가입</Register>
    </MainWrap>
  );
}

export default LoginMain;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -64px;

  .logo {
    margin-bottom: 24px;
  }
`;

const Span = styled.span`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.gr_placeholder};
`;

const Register = styled.button`
  color: ${({ theme }) => theme.colors.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
