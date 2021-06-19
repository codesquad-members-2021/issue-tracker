import React from 'react';
import styled from 'styled-components';
import { CommentType } from 'components/common/tabModal/tapDataType';
import Comment from 'page/detailIssuePage/commentList/Comment';

interface Props {
  comments: Array<CommentType> | [];
}
//유저 avatar 필요
export default function CommentList({ comments }: Props) {
  const commentList = comments.map((comment) => <Comment key={comment.id} comment={comment} />);
  return <CommentListBlock>{commentList}</CommentListBlock>;
}

const CommentListBlock = styled.div``;
