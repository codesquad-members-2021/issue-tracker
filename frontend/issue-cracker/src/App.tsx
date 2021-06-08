import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/components/styles/theme';
import ButtonList from './components/common/ButtonList';
import InputList from './components/common/InputList';
import RegisterButton from './components/common/RegisterButton';
import Logo from './components/common/Logo';

export const GlobalStyle = createGlobalStyle`
  *{
    padding:0; 
    margin:0;
    box-sizing:border-box;
  }
  body{
    font-family: 'Noto Sans KR';
    
  }
  a{
    text-decoration:none;
  }
  ol, ul, li {
    list-style: none;
  }
  button{
    border:none;
  }
`;
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppStyle>
        <Logo type={'large'} name={'hi'} />
        <Box>
          <ButtonBox>
            <ButtonList type={'large'} name={'GitHub 계정으로 로그인'} />
          </ButtonBox>
          <TextBox>or</TextBox>
          <InputBox>
            <InputList type={'large'} name={'아이디'} />
            <InputList type={'large'} name={'비밀번호'} />
          </InputBox>
          <ButtonBox>
            <ButtonList type={'large'} name={'아이디로 로그인'} />
          </ButtonBox>
        </Box>
        <RegisterButton />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const TextBox = styled.div`
  color: #a0a3bd;
  font-size: 16px;
  line-height: 28px;
  margin: 5px 0px;
  font-weight: 600;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const ButtonBox = styled.div`
  margin: 20px;
`;
