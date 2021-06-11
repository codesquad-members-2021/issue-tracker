import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MilestoneIcon from 'components/atom/MilestoneIcon';
import { getIssuesInfoState } from 'store/issueInfoStore';

interface Props {}

export default function LabelMilestoneTab({}: Props): ReactElement {
  // const {
  //   count: { label, milestone },
  // } = useRecoilValue(getIssuesInfoState);
  const IssuesInfoData = useRecoilValue(getIssuesInfoState);

  return (
    <LabelMilestoneTabBlock>
      <div>
        <LoyaltyIcon fontSize='small' />
        &nbsp;레이블 ({IssuesInfoData?.count?.label})
      </div>
      <div>
        <MilestoneIcon sizeType={14} />
        마일스톤 ({IssuesInfoData?.count?.milestone})
      </div>
    </LabelMilestoneTabBlock>
  );
}

const LabelMilestoneTabBlock = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 11px;
  color: ${({ theme }) => theme.color.fontGrey};
  width: 320px;
  height: 40px;
  div {
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.color.lineGrey};
    }
  }
`;
