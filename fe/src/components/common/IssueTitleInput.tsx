import { TextField } from '@material-ui/core';
import styled from 'styled-components';

interface InputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IssueTitleInput = ({ value, handleChange }: InputProps) => {
  return (
    <CustomTextField
      onChange={handleChange}
      label="제목"
      variant="filled"
      value={value}
    />
  );
};

export default IssueTitleInput;

const CustomTextField = styled(TextField)`
  width: 100%;
  margin-left: 1rem;

  .MuiFilledInput-root.Mui-focused {
    background-color: ${({ theme }) => theme.color.grayscale.offWhite};
    border: 2px solid ${({ theme }) => theme.color.grayscale.line};
  }

  .MuiInputLabel-filled {
    margin-left: 1rem;
  }

  .MuiFilledInput-root {
    border-radius: 14px;
    padding: 0 1rem;
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
