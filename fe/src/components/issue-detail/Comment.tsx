import { Box, Button } from '@material-ui/core';
import AuthorAvatar from 'components/common/AuthorAvatar';
import styled from 'styled-components';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as EmojiSvg } from 'icons/emoji.svg';

const Comment = () => (
  <Box display="flex">
    <AuthorAvatar size="L" name="eamon" />
    <CommentWrapper>
      <CommentHeader display="flex">
        <Box display="flex">
          <div className="comment-author">Autumn</div>
          <div className="comment-created-time">20분 전</div>
        </Box>
        <Box display="flex" alignItems="center">
          {/* 작성자 라벨 - comment author === issue author이면 노출 */}
          <IssueAuthorLabel
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <span>작성자</span>
          </IssueAuthorLabel>
          {/* 편집 버튼 - 로그인 유저 === comment author이면 노출 */}
          <Button startIcon={<EditIcon />}>편집</Button>
          <EmojiButton>
            <EmojiSvg />
          </EmojiButton>
        </Box>
      </CommentHeader>
      <CommentBody>
        <div className="comment-content">
          서버에서 받아온 텍스트가 이곳에 표시.. {/* */}
          줄바꿈.. 안된다 ^^ 처리 필요...
        </div>
      </CommentBody>
    </CommentWrapper>
  </Box>
);

const CommentWrapper = styled.div`
  ${({ theme }) => theme.style.flexColum}
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
