import React from 'react'
import styled from 'styled-components';
import LabelMilestoneToggle from '@components/common/LabelMilestoneToggle';
import IconButton from '@components/common/IconButton';

type MilestoneHeadType = {
  isShowCreate: any;
  setShowCreate: any;
}

const HeadContent = ({ isShowCreate, setShowCreate }: MilestoneHeadType) => {
  return (
    <HeadContentWrapper>
      <LabelMilestoneToggle />
      {isShowCreate
        ? <IconButton variant="outlined" color="primary"
          icon='plus' height="40px" onClick={setShowCreate}>
          취소
        </IconButton>
        : <IconButton variant="contained" color="primary"
          icon='plus' height="40px" background="#007AFF" onClick={setShowCreate}>
          추가
        </IconButton>
      }
    </HeadContentWrapper>
  )
}

const HeadContentWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default HeadContent;
