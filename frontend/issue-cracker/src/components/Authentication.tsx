import React, { useEffect } from 'react';
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';
import Loader from './layout/Loader';
import { URL as U, PATH as P } from '../utils/const';
import useToken from '../utils/useToken';
import { useSetRecoilState } from 'recoil';
import { token } from '../store/Recoil';

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

        // const decoded = await useToken(); //

        // decoded && localStorage.setItem('name', decoded.name);
        // decoded &&
        //   localStorage.setItem('profileImageUrl', decoded.profileImageUrl);

        history.push(P.ISSUE_LIST);
      } catch (error) {}
    };

    getToken();
    // const setToken = useSetRecoilState(token);
    //     setToken(data.token);
  }, [location, history, authUri]);

  return <Loader />;
};

export default Authentication;
