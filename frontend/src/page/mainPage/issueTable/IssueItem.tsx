import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LabelBadge from 'components/atom/LabelBadge';
import { IssueItemProps } from 'page/mainPage/issueTable/issueType';
import { Checkbox } from '@material-ui/core';
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded';
import MilestoneIcon from 'components/atom/MilestoneIcon';
import { timeChecker } from '../../../util/util';

export default function IssueItem({
  issue: {
    id,
    assignees,
    author,
    comment,
    commentNumber,
    createdDateTime,
    labels,
    milestone,
    title,
  },
}: IssueItemProps): ReactElement {
  const labelList = labels
    .filter((label) => label.checked)
    .map((label) => <LabelBadge key={label.id} color={label.color} desc={label.name} />);

  const passedTime = timeChecker(createdDateTime);

  return (
    <IssueItemBlock>
      <Checkbox />
      <div>
        <div className='issue-item__title'>
          <AdjustRoundedIcon className='issue-itme__icon' style={{ color: 'green' }} />
          <div>{title}</div>
          {labelList}
        </div>
        <div className='issue-item__description'>
          #{id} opened {passedTime} by {author} <MilestoneIcon />
          {milestone}
        </div>
      </div>
    </IssueItemBlock>
  );
}

const IssueItemBlock = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.color.lineGrey};
  padding: 10px;
  .issue-item__title {
    display: flex;
    align-items: center;
    font-weight: 800;
    .issue-itme__icon {
      margin-right: 10px;
    }
  }
  .issue-item__description {
    display: flex;
    font-size: ${({ theme }) => theme.size.sm}px;
    padding-top: 5px;
  }
`;
