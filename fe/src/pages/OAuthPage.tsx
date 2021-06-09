import { useHistory, useLocation } from 'react-router';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs';

const OAuthPage = () => {
  const location = useLocation();
  const history = useHistory();
  const res = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  (async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/login/auth?client=web&code=${res.code}`
    );
    localStorage.setItem('jwt', data.jwt);
    history.push('/issues');
  })();

  return (
    <Div>
      <CircularProgress />
      <span>로그인 중... 🤗</span>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 70vh;
  font-size: 3rem;

  span {
    margin-left: 1rem;
  }
`;

export default OAuthPage;
