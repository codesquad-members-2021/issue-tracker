import React from 'react'
import styled from 'styled-components';
import CommentInput from '@components/common/CommentInput';
import IconButton from '@components/common/IconButton';
import useInput from '@/utils/hook/useInput';

const CommentCreate = () => {
  const commentInputState = useInput('');

  return (
    <CommentCreateWrapper>
      <ImageTag src="https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png" />
      <div>
        <CommentInput {...{commentInputState}}/>
        <IconButton variant="contained" color="primary"
          icon='plus' height="40px" margin='16px 0 0 0' background="#007AFF"
          style={{ float: 'right' }} disabled={!commentInputState.value}>
          코멘트 작성
        </IconButton>
      </div>
    </CommentCreateWrapper>
  )
}

const CommentCreateWrapper = styled.div`
 margin-top: 32px;
  display: flex;
  width: 100%;
  > div{
    width: 100%;
  }
`;


const ImageTag = styled.img`
  width: 44px;
  height:44px;
  margin-right: 16px;
  border-radius:50%;
`;

export default CommentCreate;
