import React from 'react';
import styled from 'styled-components';
import Buttons from '../styles/atoms/Buttons';
import Typos from '../styles/atoms/Typos';
import { ReactComponent as Logo } from '../icons/logo.svg';

const Login = () => {
  return (
    <LoginWrapper>
      <Logo />
      <GitHubLogin large>GitHub 계정으로 로그인</GitHubLogin>
      <TextInBetween link sm>
        or
      </TextInBetween>
      <ManualLogin large>아이디</ManualLogin>
      <ManualLogin large>비밀번호</ManualLogin>
      <Buttons disabled large>
        아이디로 로그인
      </Buttons>
      <Typos link xs>
        회원가입
      </Typos>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${props => props.theme.alignCenter}
  flex-direction: column;
  & > * {
    margin-bottom: 20px;
  }
`;
const GitHubLogin = styled(Buttons)`
  margin-top: 50px;
  background-color: ${props => props.theme.greyscale.titleActive};
`;
const TextInBetween = styled(Typos)`
  color: ${props => props.theme.greyscale.placeholer};
`;
const ManualLogin = styled(Buttons)`
  justify-content: flex-start;
  background-color: ${props => props.theme.greyscale.inputBackgound};
  color: ${props => props.theme.greyscale.placeholer};
`;

export default Login;
