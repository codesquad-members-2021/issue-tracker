import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Title from 'components/atom/Title';
import ProfileImg from 'components/atom/ProfileImg';
import IssueInput from 'page/createIssuePage/issueInput/IssueInput';
import IssueDetailOption from 'page/createIssuePage/issueDetailOption/IssueDetailOption';
import PrimaryButton from 'components/atom/PrimaryButton';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { resetSelectedTab } from 'store/issueInfoStore';
interface Props {}

export default function CreateIssuePage({}: Props): ReactElement {
  const resetSelectTab = useSetRecoilState(resetSelectedTab);

  useEffect(() => {
    resetSelectTab(null);
  }, []);

  return (
    <CreateIssuePageBlock>
      <div className='create__section__header'>
        <Title className='create__title'>새로운 이슈 작성</Title>
      </div>
      <div className='create__section__body'>
        <ProfileImg />
        <IssueInput />
        <IssueDetailOption />
      </div>
      <div className='create__section__footer'>
        <div>⨯ 작성 취소</div>
        <PrimaryButton value='완료' className='create__submit-btn' />
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
  .create__section__body {
    display: grid;
    padding-bottom: 2rem;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.lineGrey}`};
    grid-template-columns: 5% 75% 20%;
    grid-gap: 10px;
    padding-top: 33px;
    position: relative;
  }
  .create__section__footer {
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;
    align-items: center;
    .create__submit-btn {
      margin-left: 2rem;
      width: 240px;
      height: 56px;
    }
  }
`;
