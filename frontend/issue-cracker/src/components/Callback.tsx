import React, { useEffect } from 'react';
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Loader from './layout/Loader';

const Callback = ({ history, location }: RouteComponentProps): JSX.Element => {
  const authUri = `http://localhost:8080/api/web/auth`;

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      console.log(code);
      try {
        const response = await fetch(`${authUri}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: code,
          }),
        });
        const data = await response.json();

        console.log('data', data);
        localStorage.setItem('token', data.token);

        const token = localStorage.getItem('token');
        if (!token) return;
        console.log('token?"', token);
        const decoded =
          jwtDecode<{ name: string; profileImageUrl: string }>(token);
        console.log(decoded);

        localStorage.setItem('name', decoded.name);
        localStorage.setItem('profileImageUrl', decoded.profileImageUrl);

        history.push('/main/issue-list');
      } catch (error) {}
    };

    getToken();
  }, [location, history, authUri]);
  return <Loader />;
};

export default Callback;
