import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../styles/CommonStyles';

interface SideBarDropProps {
  type: string;
  dataComponent: JSX.Element;
}

const SideBarDrop = ({
  type,
  dataComponent,
}: SideBarDropProps): JSX.Element => {
  return (
    <SideBarDropStyle>
      <DropDownTitle>{type} 추가</DropDownTitle>
      {dataComponent}
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
