import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const CommentTextarea = () => {
  const [text, setText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  return (
    <StyledCommentTextarea>
      <CustomTextField onChange={handleChange} />
      <Label aria-checked={Boolean(text)}>코멘트를 입력하세요</Label>
    </StyledCommentTextarea>
  );
};

export default CommentTextarea;
const StyledCommentTextarea = styled.div`
  position: relative;
  &:focus {
    label {
      transform: translate(12px, 10px) scale(0.6);
    }
  }
`;
const Label = styled.label`
  position: absolute;
  top: 30px;
  left: 33px;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: ${({ theme }) => theme.color.grayscale.label};
  &[aria-checked='true'] {
    transform: translate(-28px, -20px) scale(0.6);
  }
`;
const CustomTextField = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 18rem;
  background-color: rgba(0, 0, 0, 0.09);
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  padding: 2rem 2rem;
  outline-style: none;
  border: transparent;
  resize: vertical;
  &:focus {
    background-color: ${({ theme }) => theme.color.grayscale.offWhite};
    border: 2px solid ${({ theme }) => theme.color.grayscale.line};
  }
  &:focus + label {
    transform: translate(-28px, -20px) scale(0.6);
  }
`;