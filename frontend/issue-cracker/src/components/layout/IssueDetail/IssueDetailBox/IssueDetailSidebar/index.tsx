import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../../../styles/CommonStyles';
import { SIDEBAR_MENU } from '../../../../../utils/const';
import { v4 as uuidv4 } from 'uuid';
import TextGroup from '../../../../common/group/TextGroup';
import AddIcon from '@material-ui/icons/Add';
import { TYPE as T } from '../../../../../utils/const';
const IssueDetailSidebar = (): JSX.Element => {
  return (
    <IssueDetailSidebarStyle>
      {SIDEBAR_MENU.map((menu) => (
        <SideBarCell key={uuidv4()}>
          <TextGroup type={T.SMALL} content={menu} color="#6E7191" />
          <CustomAddIcon />
        </SideBarCell>
      ))}
    </IssueDetailSidebarStyle>
  );
};

export default IssueDetailSidebar;

const IssueDetailSidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 300px;
  padding: 10px;
`;

const SideBarCell = styled(S.IssueCell)`
  min-height: 96px;
  padding: 32px;
  display: flex;
  align-items: center;

  :first-child {
    border-radius: 16px 16px 0px 0px;
    border: 1px solid #d9dbe9;
  }
`;

const CustomAddIcon = styled(AddIcon)`
  font-size: 16px;
  color: #6e7191;
  cursor: pointer;
`;
