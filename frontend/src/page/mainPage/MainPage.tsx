import React, { Suspense } from 'react';
import styled from 'styled-components';
import IssueTable from 'page/mainPage/issueTable/IssueTable';
import OptionTable from 'page/mainPage/optionTable/OptionTable';
import { useResetRecoilState } from 'recoil';

import { resetTabClickedState } from 'store/labelMilestoneStore';

export default function MainPage() {
  const resetTabClicked = useResetRecoilState(resetTabClickedState);
  resetTabClicked();

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
