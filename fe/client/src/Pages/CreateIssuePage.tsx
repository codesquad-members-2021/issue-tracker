import React from 'react'
import HeadContent from '@components/createIssue/HeadContent';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
const CreateIssuePage = () => {
  return (
    <>
      <HeadContent />
      <Hr />
      <ContentsWrapper>
        <ImageTag src="https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png" />
        <InputWrapper>
          <TitleInput
            label="제목"
            variant="filled"
          />
          <DescArea
            label="코멘트를 입력하세요"
            multiline
            rows={20}
            variant="filled"
          />
        </InputWrapper>
        <div>
          asd
        </div>

      </ContentsWrapper>
      <Hr />
    </>
  )
}

const ContentsWrapper = styled.div`
  display:flex;
  margin: 32px 0;
`;

const ImageTag = styled.img`
  width: 44px;
  height:44px;
  margin-right: 16px;
  border-radius:50%;
`;

const Hr = styled.hr`
  margin:0;
  border-top:1px solid #D9DBE9;
`;

const InputWrapper = styled.div`
  width:100%;
`;
const TitleInput = styled(TextField)`
  width: 100%;
  background:#ffffff;
  margin-bottom: 16px;
`;

const DescArea = styled(TextField)`
 width: 100%;
 background:#ffffff;
`;
export default CreateIssuePage
