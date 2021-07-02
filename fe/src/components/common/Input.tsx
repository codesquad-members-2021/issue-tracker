import styled from 'styled-components';

const Input = ({
  onChange,
  label,
  value,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value?: string;
}) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input
        aria-label={label}
        onChange={onChange}
        value={value}
      />
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div`
  display: flex;
  width: 100%;
  margin: 0.5rem 0;
  border-radius: ${({ theme }) => theme.border.radius.S};
  border: none;
  position: relative;
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.grayscale.line};
    background-color: ${({ theme }) => theme.color.grayscale.offWhite};
  }
  label {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.grayscale.label};
    font-size: ${({ theme }) => theme.fontSize.S};
  }
  input {
    box-sizing: border-box;
    height: 2.7rem;
    outline: none;
    width: 100%;
    border-radius: ${({ theme }) => theme.border.radius.S};
    background-color: ${({ theme }) => theme.color.grayscale.line};

    padding-left: 7rem;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.M};
    &:focus {
      border: 2px solid ${({ theme }) => theme.color.grayscale.line};
      background-color: ${({ theme }) => theme.color.grayscale.offWhite};
    }
  }
`;
