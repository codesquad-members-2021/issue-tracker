import React, { ReactElement } from 'react';
import styled from 'styled-components';
import CheckBox from '../../atom/CheckBox';
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

interface Props {}

export default function IssueListHeaderLeft({}: Props): ReactElement {
  return (
    <IssueListHeaderLeftBlock>
      <CheckBox />
      <div className='issue-header__filter-tab'>
        <div>
          <AdjustRoundedIcon /> 열린 이슈 ()
        </div>
        <div>
          <CheckRoundedIcon /> 닫힌 이슈 ()
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
