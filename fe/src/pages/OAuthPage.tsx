import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import qs from 'qs';
import useAxios from 'hook/useAxios';
import { useEffect } from 'react';
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
      {/* <CircularProgress /> */}
      <span>로그인 중... 🤗</span>
    </Div>
  );
};

const Div = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  font-size: 3rem;

  span {
    margin-top: 5rem;
    margin-left: 1rem;
  }
`;

export default OAuthPage;
