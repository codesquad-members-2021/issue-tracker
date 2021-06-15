import React, { useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import Main from '../main/Main';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const Oauth: React.FC<Props> = ({ history, location }) => {
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const response = await axios.get(
          `http://13.125.35.62/api/login/github/web?code=${code}`
        );
        localStorage.setItem('token', response.data.data.jwt);

        axios.get('http://13.125.35.62/api/jwt', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        });
        history.push('/main');
      } catch (error) {
        alert(error);
        history.push('/');
      }
    };

    getToken();
  }, [location, history]);

  history.push('/main');
  return <Main />;
};

export default Oauth;
