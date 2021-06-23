import styled from 'styled-components';

const Input = ({
  onChange,
  label,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input onChange={onChange} />
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.grayscale.line};
  display: flex;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin: 0.5rem 0;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.grayscale.label};
    font-size: ${({ theme }) => theme.fontSize.S};
  }
  input {
    outline: none;
    width: 85%;
    background-color: ${({ theme }) => theme.color.grayscale.line};
    border: none;
    font-size: ${({ theme }) => theme.fontSize.M};
  }
`;
