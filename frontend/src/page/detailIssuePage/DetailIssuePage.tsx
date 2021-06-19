import React from 'react';
import styled from 'styled-components';
import {
  CommentType,
  LabelType,
  MilestoneType,
  UserType,
} from 'components/common/tabModal/tapDataType';
import DetailIssueHeader from 'page/detailIssuePage/detailHeader/DetailIssueHeader';
import CommentList from './commentList/CommentList';
import IssueDetailOption from 'page/createIssuePage/issueDetailOption/IssueDetailOption';
import { ReactComponent as IssueDeleteBtn } from 'assets/icon/IssueDeleteBtn.svg';

interface Props {}
//api에 작성자가 누구인지 있어야될 것 같다.
export interface DetailIssueType {
  id: number;
  title: string;
  status: boolean;
  createdDateTime: string;
  comments: Array<CommentType> | [];
  assignees: Array<UserType> | [];
  labels: Array<LabelType> | [];
  milestone: MilestoneType | null;
}

export default function DetailIssuePage({}: Props) {
  const pagePaths = window.location.pathname.split('/');
  const issueNum = +pagePaths[pagePaths.length - 1];
  //issueNum으로 fetch

  const issueData = sampleData; //fetch해온 데이터 사용예정

  return (
    <DetailIssuePageBlock>
      <DetailIssueHeader issueData={issueData} />
      <div className='detail__main'>
        <CommentList comments={issueData.comments} />
        <div className='detail__option'>
          <IssueDetailOption />
          <div className='issue__delete-btn'>
            <IssueDeleteBtn />
          </div>
        </div>
      </div>
    </DetailIssuePageBlock>
  );
}

const DetailIssuePageBlock = styled.div`
  padding: 50px 80px;
  .detail__main {
    display: grid;
    grid-template-columns: 80% 20%;
    padding-top: 33px;
    /* grid-gap: 10px; */
  }
  .issue__delete-btn {
    margin-top: 1rem;
    margin-right: 2rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const sampleData = {
  id: 2,
  title: '이슈 2',
  status: true,
  createdDateTime: '2021-06-18T21:37:13.027',
  comments: [
    {
      id: 2,
      userName: 'eNoLJ',
      comment: '이슈 내용',
      createdDateTime: '2021-06-18T21:37:13.029',
      author: true,
      owner: true,
    },
    {
      id: 4,
      userName: 'hayoung',
      comment: '코멘트 샘플 데이터',
      createdDateTime: '2021-06-19T21:37:13.029',
      author: false,
      owner: false,
    },
  ],
  assignees: [
    {
      id: 1,
      image: 'https://avatars.githubusercontent.com/u/63284310?v=4',
      userName: 'eNoLJ',
      assigned: true,
    },
    {
      id: 2,
      image: 'https://avatars.githubusercontent.com/u/68000537?v=4',
      userName: 'janeljs',
      assigned: true,
    },
  ],
  labels: [
    {
      id: 1,
      name: 'bug',
      color: {
        backgroundColorCode: '#F47378',
        textColorCode: '#000000',
      },
      description: 'bug fix',
      checked: true,
    },
    {
      id: 2,
      name: 'feature',
      color: {
        backgroundColorCode: '#6BD089',
        textColorCode: '#000000',
      },
      description: 'new feature',
      checked: true,
    },
  ],
  milestone: {
    id: 2,
    title: 'M2',
    description: 'M2 마일스톤에 대한 설명',
    createdDateTime: '2021-06-18T21:35:00',
    dueDate: '2021-06-21',
    openedIssueCount: 1,
    closedIssueCount: 0,
    checked: true,
  },
};
