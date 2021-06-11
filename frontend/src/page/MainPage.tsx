import React, { ReactElement, Suspense } from 'react';
import styled from 'styled-components';
import IssueTable from 'components/issueTable/IssueTable';
import OptionTable from 'components/optionTable/OptionTable';
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
