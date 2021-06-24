import React, { useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import URL from '../../util/url';
import Main from '../main/Main';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const GoogleOauth: React.FC<Props> = ({ history, location }) => {
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const response = await axios.get(`${URL}/login/google?code=${code}`);
        localStorage.setItem('token', response.data.data.jwt);

        axios.get(`${URL}/jwt`, {
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

  return <Main />;
};

export default GoogleOauth;
