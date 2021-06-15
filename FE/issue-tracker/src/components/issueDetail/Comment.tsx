import styled from 'styled-components';
import { Avatar } from '@chakra-ui/react';
import EditMiniButton from '@components/common/EditMiniButton';
import { ReactComponent as SmileIcon } from '@assets/smile.svg';

function Comment() {
  const author = 'Eve';
  const time = '28분 전';
  const content =
    '처음부터 전부 구현하려고 하지 말고 필수적인 기능부터 만든 후, 차근차근 완성도를 높여보세요.';
  return (
    <CommentContainer>
      <AvatarBox>
        <Avatar src="./janmang.jpeg" />
      </AvatarBox>

      <CommentBox>
        <CommentHeader>
          <div className="comment_left">
            <span className="author">{author}</span>
            <span className="time">{time}</span>
          </div>
          <div className="comment_right">
            <div className="is_author_badge">작성자</div>
            <EditMiniButton margin="0 20px">편집</EditMiniButton>
            <SmileIcon className="smile_icon" />
          </div>
        </CommentHeader>
        <CommentContent>{content}</CommentContent>
      </CommentBox>
    </CommentContainer>
  );
}

export default Comment;

const CommentContainer = styled.div`
  display: flex;
`;

const AvatarBox = styled.div`
  margin-right: 16px;
`;

const CommentBox = styled.div``;

const CommentHeader = styled.div`
  width: 880px;
  height: 64px;
  padding: 18px 24px;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;

  .comment_left {
    .author {
      color: ${({ theme }) => theme.colors.titleActive};
      margin-right: 8px;
    }
    .time {
      color: ${({ theme }) => theme.colors.gr_label};
    }
  }

  .comment_right {
    display: flex;
    align-items: center;
    .is_author_badge {
      ${({ theme }) => theme.flexCenter};
      width: 66px;
      height: 24px;
      border: 1px solid ${({ theme }) => theme.colors.gr_line};
      border-radius: 30px;

      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      color: ${({ theme }) => theme.colors.gr_label};
    }
    .smile_icon path {
      stroke: ${({ theme }) => theme.colors.gr_label};
    }
  }
`;
const CommentContent = styled.div`
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-top: none;
  border-radius: 0 0 16px 16px;
  padding: 16px 24px;
  margin-bottom: 24px;
`;
