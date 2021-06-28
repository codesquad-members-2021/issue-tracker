import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { ReactComponent as FileUploadIconSvg } from 'icons/file-upload.svg';

interface CommentTextareaProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CommentTextarea = ({ value, handleChange }: CommentTextareaProps) => {
  return (
    <Wrapper>
      <StyledCommentTextarea>
        <CustomTextField onChange={handleChange} value={value} />
        <Label aria-checked={Boolean(value)}>코멘트를 입력하세요</Label>
      </StyledCommentTextarea>
      <FileUploadArea>
        <Box display="flex" alignItems="center">
          <FileUploadIconSvg />
          <span>파일 첨부하기</span>
        </Box>
      </FileUploadArea>
    </Wrapper>
  );
};

export default CommentTextarea;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledCommentTextarea = styled.div`
  width: 100%;
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
  background-color: ${({ theme }) => theme.color.grayscale.inputBG};
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  padding: 2rem 2rem;
  outline-style: none;
  border: transparent;
  border-bottom: 1px dashed ${({ theme }) => theme.color.grayscale.line};
  resize: vertical;
  &:focus {
    background-color: ${({ theme }) => theme.color.grayscale.offWhite};
    border: 2px solid ${({ theme }) => theme.color.grayscale.line};
  }
  &:focus + label {
    transform: translate(-28px, -20px) scale(0.6);
  }
`;

const FileUploadArea = styled.div`
  display: flex;
  height: 3.25rem;
  background-color: ${({ theme }) => theme.color.grayscale.inputBG};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  padding-left: 2rem;

  span {
    margin-left: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.S};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.grayscale.label};
  }
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.grayscale.body};
  }
`;
