import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MilestoneIcon from 'components/atom/MilestoneIcon';
import { getIssuesInfoState } from 'store/issueInfoStore';
import { Link } from 'react-router-dom'
export default function LabelMilestoneTab(): ReactElement {

  const IssuesInfoData = useRecoilValue(getIssuesInfoState);

  return (
    <LabelMilestoneTabBlock>
      
      <Link to='/lable'>
        <div>
          <LoyaltyIcon fontSize='small' />
          &nbsp;레이블 ({IssuesInfoData?.count?.label})
        </div>
      </Link>
      
      
      <Link to='/milestone'>
        <div>
          <MilestoneIcon sizeType={14} />
          마일스톤 ({IssuesInfoData?.count?.milestone})
        </div>
      </Link>
      
    </LabelMilestoneTabBlock>
  );
}

const LabelMilestoneTabBlock = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 11px;
  a{
    color: ${({ theme }) => theme.color.fontGrey};
    text-decoration:none;
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
