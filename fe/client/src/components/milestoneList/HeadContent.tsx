import React from 'react'
import styled from 'styled-components';
import LabelMilestoneToggle from '@components/common/LabelMilestoneToggle';
import IconButton from '@components/common/IconButton';

const HeadContent = () => {
  return (
    <HeadContentWrapper>
      <LabelMilestoneToggle />
      <IconButton variant="contained" color="primary"
        icon='plus' height="40px" background="#007AFF">
        추가
      </IconButton>
    </HeadContentWrapper>
  )
}

const HeadContentWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default HeadContent;
