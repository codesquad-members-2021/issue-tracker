import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import Title from 'components/atom/Title';
import ProfileImg from 'components/atom/ProfileImg';
import IssueInput from 'page/createIssuePage/issueInput/IssueInput';
import IssueDetailOption from 'page/createIssuePage/issueDetailOption/IssueDetailOption';
import PrimaryButton from 'components/atom/PrimaryButton';
import { createIssue } from 'store/issueInfoStore'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { resetSelectedTab } from 'store/issueInfoStore';
import { Link } from 'react-router-dom'

export default function CreateIssuePage(): ReactElement {
  const sample = {
    title: "z코쿼",
    comment: "제인이노레이카일주나미",
    assignees: [1],
    labels: [1],
    milestone: 3
  }
  const {fetchData} = useRecoilValue(createIssue({issueInputs:sample, skip:true}))
  const history = useHistory()

  

  const handleClick = async (btnType: string) =>{
    if (btnType==='cancle'){
      history.push('/main')
    }
    else{ 
      const isSuccess = await fetchData(sample)
      const createdIssueID = isSuccess?.issueId
      
      // history.push('/main') 아이디 받아서 이슈 상세 페이지로 바로 이동.
    }
  }

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
         {/* //?onClick사용하기 위해 styled로 변경, 상위에서 한번만 내리고 싶음 => spanButton styled도 지우고*/}
        <SpanButton  onClick={()=>handleClick('cancel')}>⨯ 작성 취소</SpanButton>
        <PrimaryButton value='완료' className='create__submit-btn' onClick={()=>handleClick('create')}/>
      </div>
    </CreateIssuePageBlock>
  );
}
const SpanButton =styled.div`
cursor:pointer;`
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
      cursor:pointer;
      margin-left: 2rem;
      width: 240px;
      height: 56px;
    }
  }
`;
