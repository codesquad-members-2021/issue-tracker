import React from 'react'
import styled from 'styled-components';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import { CommentsType } from '@components/common/types/IssueDetailType';
import IconButton from '@components/common/IconButton';
import { getTimeTaken } from '@/utils/serviceUtils';
import { ReactComponent as EmojiIcon } from '@/Icons/Emoji.svg';
type CommentItemType = {
  comments: CommentsType;
  isWriter: boolean;
  setToggleEdit: any;
}
const CommentItem = ({ comments, isWriter, setToggleEdit }: CommentItemType) => {
  const { author, contents, createDateTime } = comments;

  return (
    <ListWrapper wrapWidth="100%">
      <ListHeader>
        <div>{author.name} &nbsp; {getTimeTaken(createDateTime)} 전</div>
        <ListHeaderRightSpan>
          {isWriter &&
            <>
              <WriterLabel>작성자</WriterLabel>
              <IconButton icon='edit' onClick={setToggleEdit}>
                편집 
              </IconButton>
            </>}
          <EmojiIcon />
        </ListHeaderRightSpan>
      </ListHeader>
      <div>{contents}</div>
    </ListWrapper>
  )
}

const ListHeader = styled.div`
  display:flex;
  justify-content: space-between;
`;

const ListHeaderRightSpan = styled.div`
  display: flex;
  place-items: center;
`;

const WriterLabel = styled.span`
  padding: 2px 8px;
  border: 1px solid  #b4b5ca;
  font-size: 12px;
  font-weight:700;
  border-radius: 20px;
  color:#6E7191;
`;
export default CommentItem;
