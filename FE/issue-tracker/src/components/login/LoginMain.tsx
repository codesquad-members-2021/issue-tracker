import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';

import { ReactComponent as LogoLarge } from '@assets/LogotypeLarge.svg';
import { gitLoginStyle, idLoginStyle, inputStyle } from './style';

function LoginMain() {
  return (
    <MainWrap>
      <LogoLarge className="logo" />
      <Button {...gitLoginStyle}>GitHub 계정으로 로그인</Button>
      <Span>or</Span>
      <Stack spacing={2}>
        <Input {...inputStyle} placeholder="아이디" />
        <Input {...inputStyle} placeholder="비밀번호" />
      </Stack>
      <Link to="issues">
        <Button {...idLoginStyle}>아이디로 로그인</Button>
      </Link>
      <Register>회원가입</Register>
    </MainWrap>
  );
}

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

export default LoginMain;
