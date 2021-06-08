import React, { FC } from 'react';
import styled from 'styled-components';
import ButtonList from '../common/ButtonList';
import InputList from '../common/InputList';
import RegisterButton from '../common/RegisterButton';
import Logo from '../common/Logo';
import {
  ID,
  PASSWORD,
  LARGE,
  LOGO_TITLE,
  GITHUB_LOGIN,
  DEFAULT_LOGIN,
} from '../../utils/const';
import theme from '../styles/theme';

const LogIn: FC = () => {
  return (
    <LogInDiv>
      <Box>
        <Logo type={LARGE} name={LOGO_TITLE} />
        <ButtonBox>
          <ButtonList
            type={LARGE}
            name={GITHUB_LOGIN}
            color={theme.colors.blue}
          />
        </ButtonBox>
        <TextBox>or</TextBox>
        <InputBox>
          <InputList type={LARGE} name={ID} />
          <InputList type={LARGE} name={PASSWORD} />
        </InputBox>
        <ButtonBox>
          <ButtonList
            type={LARGE}
            name={DEFAULT_LOGIN}
            // color={theme.colors.yellow}
          />
        </ButtonBox>
        <RegisterButton />
      </Box>
    </LogInDiv>
  );
};

export default LogIn;

const LogInDiv = styled.div``;

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
