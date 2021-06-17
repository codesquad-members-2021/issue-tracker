import React, { useEffect } from 'react';
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Loader from './layout/Loader';
import { URL as U, PATH as P } from '../utils/const';

const Authentication = ({
  history,
  location,
}: RouteComponentProps): JSX.Element => {
  const authUri = U.AUTH;

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

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

        localStorage.setItem('token', data.token);

        const token = localStorage.getItem('token');
        if (!token) return;

        const decoded =
          jwtDecode<{ name: string; profileImageUrl: string }>(token);

        localStorage.setItem('name', decoded.name);
        localStorage.setItem('profileImageUrl', decoded.profileImageUrl);

        history.push(P.ISSUE_LABELLIST);
      } catch (error) {}
    };

    getToken();
  }, [location, history, authUri]);

  return <Loader />;
};

export default Authentication;
