import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../styles/CommonStyles';
import { v4 as uuidv4 } from 'uuid';

import SideBarDropAsignee from './SideBarDropAsignee';
import SideBarDropLabel from './SideBarDropLabel';
import SideBarDropMileStone from './SideBarDropMileStone';

// interface userProps {
//   email: string;
//   name: string;
//   avatar_url: string;
// }
interface SideBarDropProps {
  data: { email: string; name: string; avatar_url: string }[];
}
const SideBarDrop = ({ data }: SideBarDropProps): JSX.Element => {
  return (
    <SideBarDropStyle>
      <DropDownTitle>담당자 추가</DropDownTitle>
      {data.map((user) => (
        <DropDownContent key={uuidv4()}>
          <SideBarDropAsignee data={user} />
        </DropDownContent>
      ))}
    </SideBarDropStyle>
  );
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
