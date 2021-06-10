import styled from 'styled-components';
import React, { ReactElement } from 'react';
import LabelMileStoneTab from 'components/common/LabelMilestoneTab';
import IssuePlus from 'components/atom/IssuePlus';
import IssueFilterSection from 'components/issueTable/IssueFilter';
import IssueTable from 'components/issueTable/IssueTable';

interface Props {}

export default function MainPage({}: Props): ReactElement {
  return (
    <MainPageBlock>
      <div className='issue-tracker__options'>
        <IssueFilterSection />
        <div className='options__tabs'>
          <LabelMileStoneTab />
          <IssuePlus />
        </div>
      </div>
      <IssueTable />
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
