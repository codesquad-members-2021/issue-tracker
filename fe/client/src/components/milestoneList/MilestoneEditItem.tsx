import React from 'react'
import styled from 'styled-components';
import InputField from '@/components/common/InputField';

const MilestoneEditItem = () => {
  return (
    <EditItemWrapper>
      <EditTitle>마일스톤 편집</EditTitle>
      <InputField defaultValue='마스터즈코스' label='레이블이름' />
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

export default MilestoneEditItem;
