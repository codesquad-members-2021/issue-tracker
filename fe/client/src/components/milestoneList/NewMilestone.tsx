import React from 'react'
import styled from 'styled-components';
import InputField from '@components/common/InputField';

type NewMilestoneType = {
  title: string;
  children: React.ReactNode;
  milestoneNameState: {
    value: string;
    onChange: Function;
  }
  milestoneDateState: {
    value: string;
    onChange: Function;
  }
  milestoneDescState: {
    value: string;
    onChange: Function;
  }

}
const NewMilestone = ({ title, milestoneNameState, milestoneDateState, milestoneDescState, children }: NewMilestoneType) => {
  return (
    <EditItemWrapper>
      <EditTitle>{title}</EditTitle>
      <TopInputsWrapper>
        <InputField {...milestoneNameState} label='제목' />
        <InputField {...milestoneDateState} label='완료일(선택) ex. YYYY-MM-DD' />
      </TopInputsWrapper>
      <InputField {...milestoneDescState} label='설명(선택)' />
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
