import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import qs from 'qs';

import useAxios from 'hook/useAxios';
import { getUrl } from 'utils/util';

const OAuthPage = () => {
  const location = useLocation();
  const history = useHistory();
  const res = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const url = getUrl.LOGIN(res.code);
  const { isSuccess, data } = useAxios(true, url, 'get');

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('jwt', data.jwt);
      history.push('/issues');
    }
  });

  return (
    <Div>
      <CircularProgress />
      <div>로그인 중... 🤗</div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
  width: 100%;
  height: 100vh;
  font-size: 3rem;

  div {
    margin-top: 2rem;
  }
`;

export default OAuthPage;
