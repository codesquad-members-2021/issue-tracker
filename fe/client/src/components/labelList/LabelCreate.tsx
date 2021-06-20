import React from 'react'
import NewLabel from './NewLabel';
import IconButton from '@components/common/IconButton';
import styled from 'styled-components';
import { getRandomColor } from '@/utils/serviceUtils';
import useInput from '@/utils/hook/useInput';
import API from '@/utils/API';

const LabelCreate = () => {
  const labelNameState = useInput('');
  const labelDescState = useInput('');
  const labelColorState = useInput(getRandomColor());

  const handleClickSendNewLabel = async () => {
    const postData = {
      name: labelNameState.value,
      description: labelDescState.value,
      color: labelColorState.value
    }
    const responseData = await API.post.labels(postData);
    console.log(responseData)
  }

  return (
    <LabelCreateWrapper>
      <NewLabel {...{ labelNameState, labelDescState, labelColorState }} title='새로운 레이블 추가'>
        <IconButton variant="contained" color="primary"
          icon='plus' height="40px" background="#007AFF"
          onClick={handleClickSendNewLabel}>
          완료
        </IconButton>
      </NewLabel>
    </LabelCreateWrapper>
  )
}

const LabelCreateWrapper = styled.div`
  min-width: 595px;
  padding: 32px 32px;
  margin-bottom:24px;
  border:1px solid #d9dbe9;
  border-radius: 11px;
  background: #FEFEFE;
  box-shadow:0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`
export default LabelCreate;
