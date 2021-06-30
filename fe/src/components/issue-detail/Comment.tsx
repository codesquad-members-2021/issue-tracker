import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

import AuthorAvatar from 'components/common/AuthorAvatar';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as DeleteSvg } from 'icons/delete.svg';
import { ReactComponent as EmojiSvg } from 'icons/emoji.svg';
import { instanceWithAuth } from 'api';

import { CommentType } from 'types/issueType';
import { decodedUserDataAtom } from 'stores/userStore';
import { clickedIssueIdAtom } from 'stores/issueStore';
import {
  commentUpdateAtom,
  detailIssueAuthorIdAtom,
} from 'stores/detailIssueStore';

const Comment = ({ commentData }: { commentData: CommentType }) => {
  const { id, description, createdTime, author } = commentData;
  const issueAuthorId = useRecoilValue(detailIssueAuthorIdAtom);
  const loginUser = useRecoilValue(decodedUserDataAtom);
  const clickedIssueId = useRecoilValue(clickedIssueIdAtom);
  const setCommentUpdate = useSetRecoilState(commentUpdateAtom);

  const clickDeleteHandler = () => {
    (async () => {
      await instanceWithAuth.delete(
        `${process.env.REACT_APP_API_URL}/api/issues/${clickedIssueId}/comments/${id}`
      );
      setCommentUpdate((cur) => ++cur);
    })();
  };

  return (
    <Box display="flex">
      <AuthorAvatar size="L" profileImg={author.profileImg} />
      <CommentWrapper>
        <CommentHeader display="flex">
          <Box display="flex">
            <div className="comment-author">{author.name}</div>
            <div className="comment-created-time">{createdTime}분 전</div>
          </Box>
          <Box display="flex" alignItems="center">
            {issueAuthorId === author.id && (
              <IssueAuthorLabel
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <span>작성자</span>
              </IssueAuthorLabel>
            )}
            {loginUser && loginUser.id === author.id && (
              <Button startIcon={<EditIcon />}>편집</Button>
            )}
            {loginUser && loginUser.id === author.id && (
              <Button
                onClick={clickDeleteHandler}
                startIcon={<DeleteIcon />}
                color="secondary"
              >
                삭제
              </Button>
            )}
            <EmojiButton>
              <EmojiSvg />
            </EmojiButton>
          </Box>
        </CommentHeader>
        <CommentBody>
          <div className="comment-content">{description}</div>
        </CommentBody>
      </CommentWrapper>
    </Box>
  );
};

const CommentWrapper = styled.div`
  ${({ theme }) => theme.style.flexColumn}
  box-sizing: border-box;
  margin-left: 1rem;
`;

const CommentHeader = styled(Box)`
  ${({ theme }) => theme.style.upperWrapper}
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  justify-content: space-between;

  div {
    font-size: ${({ theme }) => theme.fontSize.M};
  }

  .comment-author {
    color: ${({ theme }) => theme.color.grayscale.titleActive};
  }

  .comment-created-time {
    color: ${({ theme }) => theme.color.grayscale.label};
    margin-left: 0.5rem;
  }
`;

const IssueAuthorLabel = styled(Box)`
  width: 4.125rem;
  height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  border-radius: ${({ theme }) => theme.border.radius.XL};
  color: ${({ theme }) => theme.color.grayscale.label};
  margin-right: 1rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.S};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const EditIcon = styled(EditSvg)``;

const DeleteIcon = styled(DeleteSvg)``;

const EmojiButton = styled.button`
  all: unset;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const CommentBody = styled.div`
  ${({ theme }) => theme.style.lowerWrapper}
  box-sizing: border-box;
  padding: 1rem 1.5rem;

  .comment-content {
    color: ${({ theme }) => theme.color.grayscale.titleActive};
    font-size: ${({ theme }) => theme.fontSize.M};
  }
`;

export default Comment;
