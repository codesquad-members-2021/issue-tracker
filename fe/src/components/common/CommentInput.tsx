import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const CommentInput = () => {
  return (
    <CustomTextField
      id="filled-textarea"
      label="코멘트를 입력하세요"
      multiline
      rows={13}
      variant="filled"
    />
  );
};

export default CommentInput;

const CustomTextField = styled(TextField)`
  width: 100%;
  height: 20rem;
  .MuiFilledInput-root.Mui-focused {
    background-color: ${({ theme }) => theme.color.grayscale.offWhite};
    border: 2px solid ${({ theme }) => theme.color.grayscale.line};
  }

  .MuiInputLabel-filled {
    margin-left: 1rem;
  }

  .MuiFilledInput-root {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    padding: 2rem 2rem;
  }
  .MuiFilledInput-underline::before {
    border-bottom: 0px solid;
  }
  .MuiFilledInput-underline::after {
    border-bottom: 0px solid;
  }
  label.MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.color.grayscale.label};
  }
  .MuiInputLabel-filled.MuiInputLabel-shrink {
    transform: translate(12px, 10px) scale(0.6);
  }
`;
