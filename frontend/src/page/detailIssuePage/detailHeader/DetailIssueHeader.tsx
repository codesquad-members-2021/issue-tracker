import React from 'react';
import styled from 'styled-components';
import Title from 'components/atom/Title';
import { DetailIssueType } from 'page/detailIssuePage/DetailIssuePage';
import { timeChecker } from '../../../util/util';
import DetailIssueStatus from './DetailIssueStatus';

interface Props {
  issueData: DetailIssueType;
}

export default function DetailIssueHeader({
  issueData: { id, status, title, createdDateTime, comments },
}: Props) {
  const issueNumber = `#${id}`;
  const passedTime = timeChecker(createdDateTime);
  const author = 'hayoung123'; // 임시 author api author필요
  const headerInfo = `이 이슈가 ${author}님에 의해 열렸습니다 ∙ 코멘트 ${comments.length} ∙ ${passedTime}`;
  return (
    <DetailIssueHeaderBlock>
      <div className='header__title'>
        <Title className='issue__title'>FE 이슈트래커 디자인 시스템 구현</Title>
        <Title className='issue__number'>{issueNumber}</Title>
      </div>
      <div className='header__description'>
        <DetailIssueStatus status={status} />
        <div className='issue__info'>{headerInfo}</div>
      </div>
    </DetailIssueHeaderBlock>
  );
}

const DetailIssueHeaderBlock = styled.div`
  padding-bottom: 2rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.lineGrey}`};

  .header__title {
    font-size: 2rem;
    display: flex;
    margin-bottom: 1rem;
    .issue__number {
      color: ${({ theme }) => theme.color.fontGrey};
      margin-left: 1rem;
    }
  }
  .header__description {
    display: flex;
    align-items: center;
    .issue__info {
      font-size: 1.2rem;
      margin-left: 8px;
    }
  }
`;
