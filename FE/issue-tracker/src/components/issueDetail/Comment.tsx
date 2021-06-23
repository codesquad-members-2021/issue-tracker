import { useState } from 'react';
import styled from 'styled-components';

import { Avatar } from '@chakra-ui/react';
import { ReactComponent as SmileIcon } from '@assets/smile.svg';

import {
  checkIfDayPassedFromCreation,
  getCreatedTime,
  getRenderingText,
  getTime,
  getTimeGapFromCreation,
  getTotalMinutesBetweenGap,
} from '@utils/renderTimeText';
import pipe from '@utils/pipe';

import type { Comments } from './CommentBox';

import EditMiniButton from '@components/common/EditMiniButton';
import TextArea from './TextArea';

type Props = {
  commentData: Comments;
};

function Comment({ commentData }: Props) {
  const { id, author, created_time, description } = commentData;
  const [isDisabled, setIsDisabled] = useState(true);
  const [commentValue, setCommentValue] = useState(description);
  const { user_id, name, avatar_url } = author;

  const currentTime = new Date().getTime();
  const time = pipe(
    getCreatedTime,
    getTimeGapFromCreation(currentTime),
    getTotalMinutesBetweenGap,
    checkIfDayPassedFromCreation,
    getTime,
    getRenderingText
  )(created_time);

  return (
    <CommentContainer>
      <AvatarBox>
        <Avatar src={avatar_url} />
      </AvatarBox>
      <CommentBox>
        <CommentHeader>
          <div className="comment_left">
            <span className="author">{name}</span>
            <span className="time">{time}</span>
          </div>
          <div className="comment_right">
            <div className="is_author_badge">작성자</div>
            <EditMiniButton margin="0 20px" setState={setIsDisabled}>
              편집
            </EditMiniButton>
            <SmileIcon className="smile_icon" />
          </div>
        </CommentHeader>
        {isDisabled ? (
          <CommentContent
            value={commentValue}
            disabled={isDisabled}
          ></CommentContent>
        ) : (
          <TextArea
            commentID={id}
            value={commentValue}
            toggleState={setIsDisabled}
            setCommentValue={setCommentValue}
          />
        )}
      </CommentBox>
    </CommentContainer>
  );
}

export default Comment;

const CommentContainer = styled.div`
  margin-right: 24px;
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
const CommentContent = styled.textarea`
  margin-bottom: 24px;
  padding: 24px 24px 0 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-top: none;
  border-radius: 0 0 16px 16px;
  outline: 0;
  resize: none;
`;
