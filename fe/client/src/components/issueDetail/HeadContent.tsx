import React from 'react'
import styled from 'styled-components';
import TitleInput from '@components/common/TitleInput';
import IconButton from '@components/common/IconButton';
import CloseOrOpenLabel from '@components/common/CloseOrOpenLabel';

const HeadContent = () => {
  return (
    <>
      <HeadTitleWrapper>
        <TitleInput />
        <IconButton icon="close" variant="outlined" color="primary" minwidth="130px" margin='0 0 0 92px'>
          <ButtonText>편집 취소</ButtonText>
        </IconButton>
        <IconButton icon="edit" variant="outlined" color="primary" minwidth="130px" margin='0 0 0 10px'>
          <ButtonText>편집 취소</ButtonText>
        </IconButton>
      </HeadTitleWrapper>
      <HeadDescWrapper>
        <CloseOrOpenLabel isOpen />
        <DescSpan>이 이슈가 1분전에 닫혓습니다</DescSpan>
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
