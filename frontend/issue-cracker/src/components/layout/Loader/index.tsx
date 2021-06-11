import React, { FC } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Loader: FC = () => {
  return (
    <LoadingDiv>
      <LoginNotice>Now is Loading</LoginNotice>
      <CircularProgress style={{ color: '#1E4174' }} size={100} />
    </LoadingDiv>
  );
};

const LoadingDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const LoginNotice = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 1rem;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray3};
  border-radius: 20px;
`;

export default Loader;
