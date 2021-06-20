import React from 'react'
import styled from 'styled-components';
import NewMilestone from './NewMilestone';
import IconButton from '@components/common/IconButton';
import API from '@/utils/API';
import useInput from '@/utils/hook/useInput';

const MilestoneCreate = () => {
  const milestoneNameState = useInput('');
  const milestoneDateState = useInput('');
  const milestoneDescState = useInput('');

  const handleClickSendNewMilestone = async () => {
    const postData = {
      name: milestoneNameState.value,
      description: milestoneDescState.value,
      dueDate: milestoneDateState.value,
      closed: false
    }
    const responseData = await API.post.milestones(postData)
    console.log(responseData);
  }

  return (
    <MilestoneCreateWrapper>
      <NewMilestone title='새로운 마일스톤 추가'
        {...{ milestoneNameState, milestoneDateState, milestoneDescState }}>
        <IconButton variant="contained" color="primary"
          icon='plus' height="40px" background="#007AFF"
          onClick={handleClickSendNewMilestone}>
          완료
        </IconButton>
      </NewMilestone>
    </MilestoneCreateWrapper>
  )
}

const MilestoneCreateWrapper = styled.div`
  min-width: 595px;
  padding: 16px 32px;
  margin-bottom:24px;
  border:1px solid #d9dbe9;
  border-radius: 11px;
  background: #FEFEFE;
  box-shadow:0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`
export default MilestoneCreate;
