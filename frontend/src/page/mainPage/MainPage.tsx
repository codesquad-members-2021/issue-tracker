import React, { ReactElement, Suspense, lazy } from 'react';
import styled from 'styled-components';
// import IssueTable from 'page/mainPage/issueTable/IssueTable';
// import OptionTable from 'page/mainPage/optionTable/OptionTable';

export default function MainPage(): ReactElement {
  const OptionTable = lazy(()=>import('page/mainPage/optionTable/OptionTable'))
  const IssueTable = lazy(()=>import('page/mainPage/issueTable/IssueTable'))
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
