import React from 'react';
import styled from 'styled-components';
import CheckOffIcon from '../../styles/svg/CheckOffIcon';
import { Text as S } from '../../styles/CommonStyles';

interface SideBarDropMilestoneProps {
  data: {
    id: number;
    title: string;
    description: string;
    due_date: string;
  };
}
const SideBarDropMilestone = ({
  data,
}: SideBarDropMilestoneProps): JSX.Element => {
  return (
    <SideBarDropMileStoneStyle>
      <DropLeft>
        <MileStoneName>{data.title}</MileStoneName>
      </DropLeft>
      <DropRight>
        <CheckOffIcon />
      </DropRight>
    </SideBarDropMileStoneStyle>
  );
};

export default SideBarDropMilestone;

const SideBarDropMileStoneStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const MileStoneName = styled(S.TextSmall)`
  margin-left: 8px;
`;
const DropLeft = styled.div`
  display: flex;
`;
const DropRight = styled.div``;
