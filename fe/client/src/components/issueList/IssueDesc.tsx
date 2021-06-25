import React from 'react'
import styled from 'styled-components';
import { IssueListItemType } from '@components/common/types/APIType';
import { getTimeTaken } from '@/utils/serviceUtils';
import MilestoneIcon from '@/Icons/Milestone.svg';

type IssueDescType = {
  issueItem: IssueListItemType
}

const IssueDesc = ({ issueItem }: IssueDescType) => {
  const { number, author, milestone, createDateTime } = issueItem;
  return (
    <IssueDescWrapper>
      <span>#{number}</span>
      <span>이 이슈가 {getTimeTaken(createDateTime)}전, {author.name}님에 의해 작성되었습니다</span>
      {milestone &&
        <>
          <MilestoneImage src={MilestoneIcon} alt="" />
          <span>{milestone.name}</span>
        </>
      }
    </IssueDescWrapper>
  )
}

const IssueDescWrapper = styled.div`
  display: flex;
  color:#6E7191;
  line-height: 28px;
  margin-top:8px;
  > span {
    margin-right: 16px;
  }
`;

const MilestoneImage = styled.img`
  margin-right:8px;
`;

export default React.memo(IssueDesc);
