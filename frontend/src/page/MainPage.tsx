import styled from 'styled-components';
import React, { ReactElement } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CountInfoStorage, issuesStorage, getOpenIssues } from '../hooks/store';
import IssueFilterSection from '../components/issueListpage/IssueFilter';
import LabelMileStoneTab from '../components/common/LabelMilestoneTab';

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
      <Option>
        <IssueFilterSection />
        <FlexBox>
          <LabelMileStoneTab />
          {/* <IssuePlus /> */}
        </FlexBox>
      </Option>
      {/* <IssueList /> */}
    </MainPageBlock>
  );
}

const MainPageBlock = styled.div`
  padding: 80px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
