import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { addState } from '../../../store/Recoil';
import MilestoneAdd from './MilestoneAdd';
import MilestoneNav from './MilestoneNav';
import MilestoneTable from './MilestoneTable';

const MilestoneList = (): JSX.Element => {
  const issueAddState = useRecoilValue(addState);

  return (
    <MilestoneistStyle>
      <MilestoneNav />
      {issueAddState && <MilestoneAdd />}
      <MilestoneTable />
    </MilestoneistStyle>
  );
};

export default MilestoneList;

const MilestoneistStyle = styled.div``;
