import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Title from 'components/atom/Title';
import ProfileImg from 'components/atom/ProfileImg';
import IssueInput from 'page/createIssuePage/issueInput/IssueInput';

interface Props {}

export default function CreateIssuePage({}: Props): ReactElement {
  return (
    <CreateIssuePageBlock>
      <div className='create__section'>
        <Title className='create__title'>새로운 이슈 작성</Title>
      </div>
      <div className='create__section'>
        <ProfileImg />
        <IssueInput />
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
`;
