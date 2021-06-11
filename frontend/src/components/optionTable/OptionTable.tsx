import IssuePlus from 'components/atom/IssuePlus';
import LabelMilestoneTab from 'components/common/LabelMilestoneTab';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import IssueFilter from './issueFilter/IssueFilter';

interface Props {}

export default function OptionTable({}: Props): ReactElement {
  return (
    <OptionTableBlock>
      <IssueFilter />
      <div className='options__tabs'>
        <LabelMilestoneTab />
        <IssuePlus />
      </div>
    </OptionTableBlock>
  );
}

const OptionTableBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  .options__tabs {
    display: flex;
    align-items: center;
  }
`;
