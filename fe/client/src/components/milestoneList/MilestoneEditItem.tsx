import React from 'react'
import IconButton from '@components/common/IconButton';
import { MilestoneItemType } from '@components/common/types/MilestoneType';
import NewMilestone from './NewMilestone';

const MilestoneEditItem = ({ setToggleMilestone }: MilestoneItemType) => {
  return (
    <NewMilestone title='마일스톤 편집'>
      <IconButton variant="outlined" color="primary" margin='0 8px 0 0'
        icon='close' height="40px" onClick={setToggleMilestone}>
        취소
      </IconButton>
      <IconButton variant="contained" color="primary"
        icon='edit' height="40px" background="#007AFF">
        완료
      </IconButton>
    </NewMilestone>
  )
}

export default MilestoneEditItem;
