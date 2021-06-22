import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../../styles/CommonStyles';
import { v4 as uuidv4 } from 'uuid';
import SideBarDropMilestone from '../SideBarDropMileStone';

interface MilestoneDataProps {
  milestoneList: {
    id: number;
    title: string;
    description: string;
    due_date: string;
  }[];
}

const MilestoneData = ({ milestoneList }: MilestoneDataProps): JSX.Element => {
  return (
    <>
      {milestoneList?.map((milestone) => (
        <DropDownContent key={uuidv4()}>
          <SideBarDropMilestone data={milestone} />
        </DropDownContent>
      ))}
    </>
  );
};

export default MilestoneData;

const DropDownContent = styled(S.IssueCell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 44px;
  padding: 8px 16px;
`;
