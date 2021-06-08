import React, { FC } from 'react';
import styled from 'styled-components';

const RegisterButton: FC = () => {
  return <RegisterButtonStyle>{'회원가입'}</RegisterButtonStyle>;
};

export default RegisterButton;

const RegisterButtonStyle = styled.div`
  font-size: 14px;
`;
