import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Title from 'components/atom/Title';
import ProfileImg from 'components/atom/ProfileImg';
import IssueInput from 'page/createIssuePage/issueInput/IssueInput';
import IssueDetailOption from 'page/createIssuePage/issueDetailOption/IssueDetailOption'
import PrimaryButton from 'components/atom/PrimaryButton'
interface Props {}

export default function CreateIssuePage({}: Props): ReactElement {
  return (
    <CreateIssuePageBlock>
      <div className='create__section__header'>
        <Title className='create__title'>새로운 이슈 작성</Title>
      </div>
      <div className='create__section__body'>
        <ProfileImg />
        <IssueInput />
        <IssueDetailOption/>
      </div>
      <div className='create__section__footer'>
        <div>⨯ 작성 취소</div>
        <PrimaryButton>완료</PrimaryButton>
      </div>
    </CreateIssuePageBlock>
  );
}

const CreateIssuePageBlock = styled.div`
  padding: 50px 80px;
  .create__title {
    padding-bottom: 2rem;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.lineGrey}`};
  }
  .create__section__body{
    display: grid;
    grid-template-columns: 5% 75% 20%;
    grid-gap: 10px;
    padding-top: 33px;
  }
`;
