import React, { ReactElement, Suspense } from 'react';
import styled from 'styled-components';
import IssueTable from 'page/mainPage/issueTable/IssueTable';
import OptionTable from 'page/mainPage/optionTable/OptionTable';
import PrimaryButton from 'components/atom/PrimaryButton';

interface Props {}

export default function MainPage({}: Props): ReactElement {
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
  padding: 80px;
`;
