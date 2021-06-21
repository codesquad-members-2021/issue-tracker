import React from 'react'
import styled from 'styled-components';
import InputField from '@components/common/InputField';
import IconButton from '@components/common/IconButton';
import CloseOrOpenLabel from '@components/common/CloseOrOpenLabel';
import useToggle from '@/utils/hook/useToggle';
import useInput from '@/utils/hook/useInput';

type HeadContentType = {
  issueNumber: number;
  id: number;
  title: string;
}

const HeadContent = ({ issueNumber, id, title }: HeadContentType) => {
  const [isEditTitle, setEditTitle] = useToggle(false);
  const issueTitleState = useInput('title');

  return (
    <>
      <HeadTitleWrapper>
        {isEditTitle
          ? <InputField {...issueTitleState} />
          : <IssueTitle>
            {title}
            <IssueNumberSpan>#{issueNumber}</IssueNumberSpan>
          </IssueTitle>}
        {isEditTitle
          ? <>
            <IconButton icon="close" variant="outlined" color="primary" minwidth="130px" margin='0 0 0 92px'
              onClick={setEditTitle}>
              <ButtonText>편집 취소</ButtonText>
            </IconButton>
            <IconButton icon="edit" variant="contained" color="primary" minwidth="130px"
              margin='0 0 0 10px' background="#007AFF">
              <ButtonText>편집 완료</ButtonText>
            </IconButton>
          </>
          : <><IconButton icon="edit" variant="outlined" color="primary" minwidth="130px" margin='0 0 0 92px'
            onClick={setEditTitle}>
            <ButtonText>제목 편집</ButtonText>
          </IconButton>
            <IconButton icon="closeBox" variant="outlined" color="primary" minwidth="130px"
              margin='0 0 0 10px' >
              <ButtonText>이슈 닫기</ButtonText>
            </IconButton></>
        }
      </HeadTitleWrapper>
      <HeadDescWrapper>
        <CloseOrOpenLabel isOpen />
        <DescSpan>이 이슈가 1분전에 닫혓습니다 · 코멘트 1개</DescSpan> 

      </HeadDescWrapper>
      <Hr />
    </>
  )
}
const HeadTitleWrapper = styled.div`
  display: flex;
  height: 56px;
  margin-bottom: 16px;
`;

const IssueTitle = styled.div`
  width: 100%;
  font-size: 32px;
`;
const IssueNumberSpan = styled.span`
  margin-left: 16px;
  color: #6E7191
`;

const HeadDescWrapper = styled.div`
  margin-bottom: 36px;
`;

const ButtonText = styled.span`
  font-size:12px;
`;

const DescSpan = styled.span`
  font-size: 18px;
  color:#4E4B66;
`;
const Hr = styled.hr`
  margin:0 0 32px 0;
  border-top:1px solid #D9DBE9;
`;

export default HeadContent;
