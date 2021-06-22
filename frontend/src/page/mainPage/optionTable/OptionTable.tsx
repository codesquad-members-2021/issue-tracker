import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LabelMilestoneTab from 'components/common/LabelMilestoneTab';
import IssueFilter from './issueFilter/IssueFilter';
import PrimaryButton from 'components/atom/PrimaryButton';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { resetSelectedTab } from 'store/issueInfoStore';

export default function OptionTable(): ReactElement {
  const resetSelectTab = useSetRecoilState(resetSelectedTab);

  const handleCreateClick = () => {
    resetSelectTab(null);
  };

  return (
    <OptionTableBlock>
      <IssueFilter />
      <div className='options__tabs'>
        <LabelMilestoneTab />
        <Link to='/create'>
          <PrimaryButton value='이슈작성 📝' onClick={handleCreateClick} />
        </Link>
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
