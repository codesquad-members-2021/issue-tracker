import React, { useEffect, FunctionComponent } from 'react';
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const Callback = ({ history, location }: RouteComponentProps) => {
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
        // localStorage.setItem('ProfileURL', data.avatar_url);

        const token = localStorage.getItem('token');
        if (!token) return null;
        console.log('token?"', token);
        const decoded = jwtDecode(token);
        console.log(decoded);

        history.push('/');
      } catch (error) {}
    };

    getToken();
  }, [location, history, authUri]);
  return <div></div>;
};

export default Callback;
