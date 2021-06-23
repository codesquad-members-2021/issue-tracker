import React, { FC } from 'react';
import styled from 'styled-components';
import ButtonList from '../../common/group/ButtonGroup';
import InputGroup from '../../common/group/InputGroup';
import RegisterButton from '../../common/RegisterButton';
import Logo from '../../common/Logo';
import {
  LOGO_TITLE,
  BUTTON_SIZE as B,
  LOGIN as L,
  URL as U,
} from '../../../utils/const';
import theme from '../../styles/theme';

const LogIn: FC = () => {
  return (
    <LogInDiv>
      <LogInBox>
        <Logo type={B.LARGE} name={LOGO_TITLE} />
        <a href={U.LOGIN}>
          <ButtonBox>
            <ButtonList
              type={B.LARGE}
              name={L.GITHUB_LOGIN}
              color={theme.colors.blue}
            />
          </ButtonBox>
        </a>
        <TextBox>or</TextBox>
        <InputBox>
          <InputGroup type={B.LARGE} name={L.ID} variant={'filled'} />
          <InputGroup type={B.LARGE} name={L.PASSWORD} variant={'filled'} />
        </InputBox>
        <ButtonBox>
          <ButtonList
            type={B.LARGE}
            name={L.DEFAULT_LOGIN}
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
