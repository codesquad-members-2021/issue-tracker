import React from 'react';
import styled from 'styled-components';
import { CommentType } from 'components/common/tabModal/tapDataType';
import Comment from 'page/detailIssuePage/commentList/Comment';
import CommentInput from './CommentInput';
import PrimaryButton from 'components/atom/PrimaryButton';

interface Props {
  comments: Array<CommentType> | [];
}
//유저 avatar 필요
export default function CommentList({ comments }: Props) {
  const commentList = comments.map((comment) => <Comment key={comment.id} comment={comment} />);
  return (
    <CommentListBlock>
      {commentList}
      <CommentInput />
      <div className='comment__create-btn'>
        <PrimaryButton value='+ 코멘트 작성' />
      </div>
    </CommentListBlock>
  );
}

const CommentListBlock = styled.div`
  margin-right: 4rem;
  .comment__create-btn {
    display: flex;
    justify-content: flex-end;
  }
`;
