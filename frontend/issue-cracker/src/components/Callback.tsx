import React, { FunctionComponent } from 'react';
import { useEffect } from 'react';
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';

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

        history.push('/');
      } catch (error) {}
    };

    getToken();
  }, [location, history, authUri]);
  return <div></div>;
};

export default Callback;
