import React, { FC } from 'react';
import styled from 'styled-components';
import ButtonList from '../../common/group/ButtonGroup';
import InputGroup from '../../common/group/InputGroup';
import RegisterButton from '../../common/RegisterButton';
import Logo from '../../common/Logo';
import {
  ID,
  PASSWORD,
  LARGE,
  LOGO_TITLE,
  GITHUB_LOGIN,
  DEFAULT_LOGIN,
} from '../../../utils/const';
import theme from '../../styles/theme';

const LogIn: FC = () => {
  const loginUri = `https://github.com/login/oauth/authorize?client_id=2a42dd1b1e2aad1238e9&scope=read:user&redirect_uri=http://localhost:3000/callback`;
  return (
    <LogInDiv>
      <LogInBox>
        <Logo type={LARGE} name={LOGO_TITLE} />
        <a href={loginUri}>
          <ButtonBox>
            <ButtonList
              type={LARGE}
              name={GITHUB_LOGIN}
              color={theme.colors.blue}
            />
          </ButtonBox>
        </a>
        <TextBox>or</TextBox>
        <InputBox>
          <InputGroup type={LARGE} name={ID} variant={'filled'} />
          <InputGroup type={LARGE} name={PASSWORD} variant={'filled'} />
        </InputBox>
        <ButtonBox>
          <ButtonList
            type={LARGE}
            name={DEFAULT_LOGIN}
            // color={theme.colors.yellow}
          />
        </ButtonBox>
        <RegisterButton />
      </LogInBox>
    </LogInDiv>
  );
};

export default LogIn;

const LogInDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LogInBox = styled.div`
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
