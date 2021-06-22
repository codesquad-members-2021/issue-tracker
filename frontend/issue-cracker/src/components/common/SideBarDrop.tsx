import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../styles/CommonStyles';
import { v4 as uuidv4 } from 'uuid';

import SideBarDropAssignee from './SideBarDropAssignee';
import SideBarDropLabel from './SideBarDropLabel';
import SideBarDropMileStone from './SideBarDropMileStone';

// interface userProps {
//   email: string;
//   name: string;
//   avatar_url: string;
// }
interface SideBarDropProps {
  type: string;
  assigneeData?: {
    email: string;
    name: string;
    avatar_url: string;
  }[];
  labelData?: {
    id: number;
    title: string;
    description: string;
    background_color_hexa: string;
    text_color_hexa: string;
  }[];
  milestoneData?: {
    id: number;
    milestone_info: any;
  }[];
}

const SideBarDrop = ({
  type,
  assigneeData,
  labelData,
  milestoneData,
}: SideBarDropProps): JSX.Element => {
  if (type === '담당자') {
    return (
      <SideBarDropStyle>
        <DropDownTitle>{type} 추가</DropDownTitle>
        {assigneeData?.map((user) => (
          <DropDownContent key={uuidv4()}>
            <SideBarDropAssignee data={user} />
          </DropDownContent>
        ))}
      </SideBarDropStyle>
    );
  } else if (type === '레이블') {
    return (
      <SideBarDropStyle>
        <DropDownTitle>{type} 추가</DropDownTitle>
        {labelData?.map((label) => (
          <DropDownContent key={uuidv4()}>
            <SideBarDropLabel data={label} />
          </DropDownContent>
        ))}
      </SideBarDropStyle>
    );
  } else {
    return (
      <SideBarDropStyle>
        <DropDownTitle>{type} 추가</DropDownTitle>
        {milestoneData?.map((milestone) => (
          <DropDownContent key={uuidv4()}>
            <SideBarDropMileStone data={milestone} />
          </DropDownContent>
        ))}
      </SideBarDropStyle>
    );
  }
};

export default SideBarDrop;
const SideBarDropStyle = styled.div``;
const DropDownTitle = styled(S.IssueTableHeader)`
  display: flex;
  align-items: center;
  width: 240px;
  height: 48px;
  padding: 8px 16px;
`;
const DropDownContent = styled(S.IssueCell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 44px;
  padding: 8px 16px;
`;
