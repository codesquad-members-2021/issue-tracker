import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';
import IssueTable from 'page/mainPage/issueTable/IssueTable';
import OptionTable from 'page/mainPage/optionTable/OptionTable';
import fetchLogin from 'util/api/fetchLogin';
import { useSetRecoilState } from 'recoil';
import { loginState } from 'store/loginStore';

export default function MainPage() {
  const setLogin = useSetRecoilState(loginState);

  useEffect(() => {
    const query = window.location.search;
    const loginCode = query.split('=')[1];
    setLoginData(loginCode);
  }, []);

  const setLoginData = async (loginCode: string) => {
    const loginData = await fetchLogin(loginCode);
    setLogin(loginData);
    localStorage.setItem('token', loginData.token);
  };

  return (
    <MainPageBlock>
      <Suspense fallback='loading...'>
        <OptionTable />
      </Suspense>
      <Suspense fallback='loading...'>
        <IssueTable />
      </Suspense>
    </MainPageBlock>
  );
}

const MainPageBlock = styled.div`
  padding: 50px 80px;
`;
