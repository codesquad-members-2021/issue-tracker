import React from 'react'
import CommentInput from '@components/common/CommentInput';
import IconButton from '@components/common/IconButton';
import styled from 'styled-components';
import useInput from '@/utils/hook/useInput';

type CommentEditType = {
  setToggleEdit: any;

}

const CommentEdit = ({ setToggleEdit }: CommentEditType) => {
  const commentInputState = useInput('');

  return (
    <>
      <CommentInput {...{ commentInputState }} />
      <ButtonsWrapper>
        <IconButton variant="outlined" color="primary"
          icon='close' height="40px" margin='0 16px 0 0'
          onClick={setToggleEdit}>
          편집 취소
        </IconButton>
        <IconButton variant="contained" color="primary"
          icon='edit' height="40px" background="#007AFF">
          편집 완료
        </IconButton>
      </ButtonsWrapper>
    </>
  )
}

const ButtonsWrapper = styled.div`
  display:flex;
  margin-top:16px;
  place-content: flex-end;
`;
export default CommentEdit;
