import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MilestoneIcon from 'components/atom/MilestoneIcon';
import { getIssuesInfoState } from 'store/issueInfoStore';
import { Link } from 'react-router-dom';
import { labelMilestoneClickedState } from 'store/labelMilestoneStore';

interface Props {
  lableState?: boolean;
  milestoneState?: boolean;
}
export default function LabelMilestoneTab(): ReactElement {
  const labelMilestoneClick = useRecoilValue(labelMilestoneClickedState);

  const IssuesInfoData = useRecoilValue(getIssuesInfoState);

  return (
    <LabelMilestoneTabBlock>
      <Link to='/label'>
        <LableBlock lableState={labelMilestoneClick.label}>
          <LoyaltyIcon fontSize='small' />
          &nbsp;레이블 ({IssuesInfoData?.count?.label})
        </LableBlock>
      </Link>
      <Link to='/milestone'>
        <MilestoneBlock milestoneState={labelMilestoneClick.milestone}>
          <MilestoneIcon sizeType={14} />
          마일스톤 ({IssuesInfoData?.count?.milestone})
        </MilestoneBlock>
      </Link>
    </LabelMilestoneTabBlock>
  );
}
const MilestoneBlock = styled.div<Props>`
  border-radius: 0 11px 11px 0;
  background-color: ${({ milestoneState, theme }) =>
    milestoneState ? theme.color.bgGrey : theme.color.white};
`;
const LableBlock = styled.div<Props>`
  border-radius: 11px 0 0 11px;
  background-color: ${({ lableState, theme }) =>
    lableState ? theme.color.bgGrey : theme.color.white};
`;
const LabelMilestoneTabBlock = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 11px;
  a {
    color: ${({ theme }) => theme.color.fontGrey};
    text-decoration: none;
    div {
      width: 160px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.color.lineGrey};
      }
    }
  }
`;
