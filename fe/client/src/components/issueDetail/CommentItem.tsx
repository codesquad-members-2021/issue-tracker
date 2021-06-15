import React from 'react'
import styled from 'styled-components';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';

const CommentItem = () => {
  return (
      <CommentItemWrapper>
        <ImageTag src="https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png" />
        <div>
          <ListWrapper wrapWidth="100%">
            <ListHeader>
              <div>프레디 11분전</div>
              <div>작성자 편집 임티</div>
            </ListHeader>
            <div>내용!~</div>
          </ListWrapper>
        </div>
      </CommentItemWrapper>
  )
}

const CommentItemWrapper = styled.div`
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

const ListHeader = styled.div`
  display:flex;
  justify-content: space-between;
`;
export default CommentItem;
