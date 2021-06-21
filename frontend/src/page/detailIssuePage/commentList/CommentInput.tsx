import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { GiPaperClip } from 'react-icons/gi';
import ProfileImg from 'components/atom/ProfileImg';

export default function CommentInput() {
  const [comment, setComment] = useState('');
  const [length, setLength] = useState(0);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    setLength(e.target.value.length);
  };
  return (
    <CommentInputBlock>
      <div className='comment__avatar'>
        <ProfileImg className='comment__avatar-img' />
      </div>
      <div className='comment__input'>
        <textarea
          className='input__description'
          placeholder='코멘트를 입력하세요.'
          onChange={handleCommentChange}
          value={comment}
        />
        <div className='input__addFile'>
          <label htmlFor='add_file'>
            <GiPaperClip />
            &nbsp;파일 첨부하기
          </label>
          <input type='file' id='add_file' className='input__file' accept='.png, .jpg, .jpeg' />
        </div>
        <div className='input__lengthCheck'>공백포함 {length}자</div>
      </div>
    </CommentInputBlock>
  );
}

const CommentInputBlock = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  .comment__avatar {
    margin-right: 1rem;
  }
  .comment__input {
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.color.inputBg};
    border-radius: 14px;
  }
  .input__description {
    padding: 24px;
    width: 100%;
    height: 343px;
    font-size: ${({ theme }) => theme.size.md}px;
    background-color: ${({ theme }) => theme.color.inputBg};
    border: none;
    border-bottom: 1px dashed ${({ theme }) => theme.color.fontGrey};
    border-radius: 14px 14px 0 0;
    resize: none;

    &:focus {
      text-decoration: none;
      background-color: ${({ theme }) => theme.color.white};
      .input__addFile {
        background-color: ${({ theme }) => theme.color.white}; //?이거 어케해야함?
      }
    }
  }
  .input__addFile {
    padding: 16px 24px;
  }
  .input__file {
    height: 0px;
  }
  .input__lengthCheck {
    position: absolute;
    right: 3%;
    bottom: 20%;
  }
`;
