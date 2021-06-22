import React, { useState, ReactElement, useRef, MutableRefObject, RefObject } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Title from 'components/atom/Title';
import ProfileImg from 'components/atom/ProfileImg';
import IssueInput from 'page/createIssuePage/issueInput/IssueInput';
import IssueDetailOption from 'page/createIssuePage/issueDetailOption/IssueDetailOption';
import PrimaryButton from 'components/atom/PrimaryButton';
import { useRecoilValue } from 'recoil';
import { IssueFormDataState } from 'store/issueInfoStore';
import fetchCreate from 'util/api/fetchCreate';
import ErrorPage from 'page/errorPage/ErrorPage';

type inputsType = {
  title?: string;
  comment: string;
  assignees: number[] | [];
  labels: number[] | [];
  milestone: number | null;
};

export default function CreateIssuePage(): ReactElement {
  const { assigneeID, labelID, milestoneID } = useRecoilValue(IssueFormDataState);
  const history = useHistory();
  const titleRef = useRef(null);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);

  const handleClick = async (btnType: string) => {
    if (btnType === 'cancle') {
      history.push('/main');
    } else {
      const titleInput = titleRef?.current as HTMLInputElement | null;
      const titleValue = titleInput?.value;
      const sample: inputsType = {
        title: titleValue ? titleValue : '제목 없음',
        comment: comment ? comment : '',
        assignees: assigneeID,
        labels: labelID,
        milestone: milestoneID ? milestoneID : null,
      };

      try {
        const isSuccess = await fetchCreate(sample);
        const createdIssueID = isSuccess?.issueId;
        history.push(`/detail/${createdIssueID}`);
      } catch (error) {
        console.log('에러가발생했다!', error);
        setError(true);
      }
    }
  };

  return error ? (
    <ErrorPage />
  ) : (
    <CreateIssuePageBlock>
      <div className='create__section__header'>
        <Title className='create__title'>새로운 이슈 작성</Title>
      </div>
      <div className='create__section__body'>
        <ProfileImg />
        <IssueInput titleRef={titleRef} comment={comment} setComment={setComment} />
        <IssueDetailOption />
      </div>
      <div className='create__section__footer'>
        {/* //?onClick사용하기 위해 styled로 변경, 상위에서 한번만 내리고 싶음 => spanButton styled도 지우고*/}
        <SpanButton onClick={() => handleClick('cancel')}>⨯ 작성 취소</SpanButton>
        <PrimaryButton
          value='완료'
          className='create__submit-btn'
          onClick={() => handleClick('create')}
        />
      </div>
    </CreateIssuePageBlock>
  );
}
const SpanButton = styled.div`
  cursor: pointer;
`;
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
      cursor: pointer;
      margin-left: 2rem;
      width: 240px;
      height: 56px;
    }
  }
`;
