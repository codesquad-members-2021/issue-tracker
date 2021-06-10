import styled from 'styled-components';
import React, { ReactElement } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CountInfoStorage, issuesStorage, getOpenIssues } from '../hooks/store';
import IssueFilterSection from '../components/issueListpage/IssueFilter';
import LabelMileStoneTab from '../components/common/LabelMilestoneTab';
import IssuePlus from '../components/atom/IssuePlus';

interface Props {}

export default function MainPage({}: Props): ReactElement {
  const setCountInfo = useSetRecoilState(CountInfoStorage);
  const setIssues = useSetRecoilState(issuesStorage);

  const asyncOpenIssues = useRecoilValue(getOpenIssues); //요청해서받은 오픈이슈
  const openIssueList = asyncOpenIssues?.issues;
  setIssues(openIssueList);

  const countInfo = asyncOpenIssues?.count;
  setCountInfo(countInfo);

  return (
    <MainPageBlock>
      <div className='issue-tracker__options'>
        <IssueFilterSection />
        <div className='options__tabs'>
          <LabelMileStoneTab />
          <IssuePlus />
        </div>
      </div>
      {/* <IssueList /> */}
    </MainPageBlock>
  );
}

const MainPageBlock = styled.div`
  padding: 80px;
  .issue-tracker__options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .options__tabs {
    display: flex;
    align-items: center;
  }
`;
