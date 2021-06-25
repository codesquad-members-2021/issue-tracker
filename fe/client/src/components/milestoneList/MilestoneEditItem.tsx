import React from 'react'
import IconButton from '@components/common/IconButton';
import { MilestoneItemType } from '@components/common/types/MilestoneType';
import NewMilestone from './NewMilestone';
import useInput from '@/utils/hook/useInput';
import API from '@/utils/API';


const MilestoneEditItem = ({ milestoneItem, setToggleMilestone }: MilestoneItemType) => {
  const { id, name, dueDate, description, closed } = milestoneItem;
  const milestoneNameState = useInput(name);
  const milestoneDateState = useInput(dueDate);
  const milestoneDescState = useInput(description);
  
  const handleClickSendEditMilestone = async () => {
    const putData = {
      name: milestoneNameState.value,
      dueDate: milestoneDateState.value,
      description: milestoneDescState.value,
      closed
    }
    API.put.milestones(id, putData);
  }

  return (
    <NewMilestone title='마일스톤 편집'
      {...{ milestoneNameState, milestoneDateState, milestoneDescState }}>
      <IconButton variant="outlined" color="primary" margin='0 8px 0 0'
        icon='close' height="40px" onClick={setToggleMilestone}>
        취소
      </IconButton>
      <IconButton variant="contained" color="primary"
        icon='edit' height="40px" background="#007AFF"
         onClick={handleClickSendEditMilestone}>
        완료
      </IconButton>
    </NewMilestone>
  )
}

export default MilestoneEditItem;
