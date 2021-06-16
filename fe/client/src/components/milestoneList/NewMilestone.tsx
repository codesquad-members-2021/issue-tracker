import React from 'react'
import styled from 'styled-components';
import InputField from '@components/common/InputField';

type NewMilestoneType = {
  title: string;
  children: React.ReactNode;
}

const NewMilestone = ({ title, children }: NewMilestoneType) => {
  return (
    <EditItemWrapper>
      <EditTitle>{title}</EditTitle>
      <TopInputsWrapper>
        <InputField defaultValue='마스터즈코스' label='제목' />
        <InputField defaultValue='마스터즈코스' label='완료일(선택)' />
      </TopInputsWrapper>
      <InputField defaultValue='마스터즈코스' label='설명(선택)' />
      <ButtonsWrapper>
        {children}
      </ButtonsWrapper>
    </EditItemWrapper>
  )
}

const EditItemWrapper = styled.div`
  padding: 16px 0;
`;

const EditTitle = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
`;

const TopInputsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  place-content: flex-end;
`;
export default NewMilestone;
