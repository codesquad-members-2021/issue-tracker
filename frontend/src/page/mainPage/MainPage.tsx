import React, { ReactElement, Suspense, useEffect } from 'react';
import styled from 'styled-components';
import IssueTable from 'page/mainPage/issueTable/IssueTable';
import OptionTable from 'page/mainPage/optionTable/OptionTable';
import fetchLogin from 'util/api/fetchLogin';

export default function MainPage(): ReactElement {
  useEffect(() => {
    const query = window.location.search;
    const loginCode = query.split('=')[1];
    console.log('로그인코드', loginCode);
    const setLoginData = async () => {
      const loginData = await fetchLogin(loginCode);
      console.log(loginData);
      //atom에 저장
    };
    setLoginData();
  }, []);
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
