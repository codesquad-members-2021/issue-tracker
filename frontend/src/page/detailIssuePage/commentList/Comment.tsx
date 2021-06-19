import React from 'react';
import styled from 'styled-components';
import { CommentType } from 'components/common/tabModal/tapDataType';
import { timeChecker } from '../../../util/util';
import { ReactComponent as EditBtn } from 'assets/icon/EditIcons.svg';
import { ReactComponent as Emoji } from 'assets/icon/Emoji.svg';
import ProfileImg from 'components/atom/ProfileImg';

interface Props {
  comment: CommentType;
}

export default function Comment({
  comment: { userName, comment, createdDateTime, author, owner },
}: Props) {
  const passedTime = timeChecker(createdDateTime);
  return (
    <CommentBlock>
      <div className='comment__avatar'>
        <ProfileImg className='comment__avatar-img' />
      </div>
      <div className='comment'>
        <div className='comment__header'>
          <div className='header__section'>
            <div>{userName}</div>
            <div className='comment__passed-time'>{passedTime}</div>
          </div>
          <div className='header__section'>
            {author && <div className='comment__author-label'>작성자</div>}
            {owner && (
              <div className='comment__edit-btn'>
                <EditBtn />
                <div>편집</div>
              </div>
            )}
            <Emoji />
          </div>
        </div>
        <div className='comment__content'>{comment}</div>
      </div>
    </CommentBlock>
  );
}

const CommentBlock = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  .comment__avatar {
    margin-right: 1rem;
  }
  .comment {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 125px;
    border: 1px solid #d9dbe9;
    border-radius: 16px;
    overflow: hidden;
  }
  .comment__header,
  .comment__content {
    padding: 0 1.5rem;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .comment__header {
    justify-content: space-between;
    background-color: ${({ theme }) => theme.color.bgGrey};
  }
  .header__section,
  .comment__edit-btn {
    display: flex;
    align-items: center;
  }
  .header__section:first-child {
    .comment__passed-time {
      margin-left: 8px;
      color: ${({ theme }) => theme.color.fontGrey};
    }
  }
  .header__section:last-child {
    & > div {
      margin-right: 1rem;
    }
    .comment__author-label {
      border: ${({ theme }) => `1px solid ${theme.color.lineGrey}`};
      border-radius: 30px;
      padding: 2px 16px;
    }
  }
`;
