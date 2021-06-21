import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../styles/CommonStyles';
import SideBarDropAsignee from './SideBarDropAsignee';
import SideBarDropLabel from './SideBarDropLabel';
import SideBarDropMileStone from './SideBarDropMileStone';
const SideBarDrop = (): JSX.Element => {
  return (
    <SideBarDropStyle>
      <DropDownTitle>담당자 추가</DropDownTitle>
      <DropDownContent>
        <SideBarDropAsignee />
      </DropDownContent>
      <DropDownContent>
        <SideBarDropAsignee />
      </DropDownContent>
      <DropDownContent>
        <SideBarDropLabel />
      </DropDownContent>
      <DropDownContent>
        <SideBarDropMileStone />
      </DropDownContent>
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
