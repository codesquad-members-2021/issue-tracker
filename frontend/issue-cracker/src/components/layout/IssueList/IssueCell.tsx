import React from 'react';
import { Issue as S } from '../../styles/CommonStyles';
import CheckBoxes from '../../common/CheckBoxes';
import IssueOpenIcon from '../../styles/svg/IssueOpenIcon';
import styled from 'styled-components';

const IssueCell = (): JSX.Element => {
  return (
    <S.IssueCell>
      <div>
        <CheckBoxes />
      </div>
      <IssueContent>
        <IssueUpper>
          <IssueOpenIcon color="#3f51b5" style={{ width: 24, height: 24 }} />
          <IssueTitle>이슈제목</IssueTitle>
        </IssueUpper>
        <IssueLower></IssueLower>
      </IssueContent>
      <div></div>
    </S.IssueCell>
  );
};

export default IssueCell;
const IssueContent = styled.div``;
// const IssueContent = styled.div``;
// const IssueContent = styled.div``;

const IssueUpper = styled.div``;
const IssueLower = styled.div``;
const IssueTitle = styled.div`
  font-weight: 600;
`;
