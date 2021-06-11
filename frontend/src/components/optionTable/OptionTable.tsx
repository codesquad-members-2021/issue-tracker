import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LabelMilestoneTab from 'components/common/LabelMilestoneTab';
import IssueFilter from './issueFilter/IssueFilter';
import PrimaryButton from 'components/atom/PrimaryButton';

interface Props {}

export default function OptionTable({}: Props): ReactElement {
  return (
    <OptionTableBlock>
      <IssueFilter />
      <div className='options__tabs'>
        <LabelMilestoneTab />
        <PrimaryButton value='이슈작성 📝' />
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
