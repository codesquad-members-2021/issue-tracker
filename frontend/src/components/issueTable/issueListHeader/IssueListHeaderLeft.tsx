import React, { ReactElement } from 'react';
import styled from 'styled-components';
import CheckBox from 'components/atom/CheckBox';
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { useSetRecoilState } from 'recoil';
import { issueTypeState } from 'store/issueInfoStore';

interface Props {}

export default function IssueListHeaderLeft({}: Props): ReactElement {
  const setIssueType = useSetRecoilState(issueTypeState);

  const handleOpenClick = () => setIssueType('open');
  const handleCloseClick = () => setIssueType('close');
  return (
    <IssueListHeaderLeftBlock>
      <CheckBox />
      <div className='issue-header__filter-tab'>
        <div onClick={handleOpenClick}>
          <AdjustRoundedIcon /> <span>열린 이슈 ()</span>
        </div>
        <div onClick={handleCloseClick}>
          <CheckRoundedIcon /> <span>닫힌 이슈 ()</span>
        </div>
      </div>
    </IssueListHeaderLeftBlock>
  );
}

const IssueListHeaderLeftBlock = styled.div`
  .issue-header__filter-tab {
    display: flex;
    div {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
`;
