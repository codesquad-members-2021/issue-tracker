import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../styles/CommonStyles';

const SideBarDropDown = (): JSX.Element => {
  return (
    <SideBarDropDownStyle>
      <DropDownTitle>담당자 추가</DropDownTitle>
      <DropDownContent>hi</DropDownContent>
      <DropDownContent>bye</DropDownContent>
    </SideBarDropDownStyle>
  );
};

export default SideBarDropDown;
const SideBarDropDownStyle = styled.div`
  position: absolute;
  left: -7px;
  top: 30px;
`;
const DropDownTitle = styled(S.IssueTableHeader)`
  display: flex;
  align-items: center;
  width: 240px;
  height: 48px;
  padding: 8px 16px;
`;
const DropDownContent = styled(S.IssueCell)`
  display: flex;
  align-items: center;
  width: 240px;
  height: 44px;
  padding: 8px 16px;
`;
