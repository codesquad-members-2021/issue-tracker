import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { ReactComponent as RefreshSvg } from 'icons/IconsRefresh.svg';

const LabelColorInput = ({
  onChange,
  value,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => {
  return (
    <StyledInput>
      <label>배경색상</label>
      <input
        type="color"
        aria-label="배경색상"
        onChange={onChange}
        value={value}
      />
      <RefreshButton>
        <RefreshSvg />
      </RefreshButton>
    </StyledInput>
  );
};

export default LabelColorInput;

const StyledInput = styled.div`
  display: flex;
  width: 35%;
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

  input[type='color'] {
    border-radius: ${({ theme }) => theme.border.radius.S};
    ::-webkit-color-swatch {
      border: none;
      border-radius: ${({ theme }) => theme.border.radius.S};
      height: 1.6rem;
      margin-top: 0.25rem;
    }
  }

  input {
    box-sizing: border-box;
    height: 2.7rem;
    outline: none;
    width: 100%;
    border-radius: ${({ theme }) => theme.border.radius.S};
    background-color: ${({ theme }) => theme.color.grayscale.line};
    width: 85%;
    padding-left: 7rem;
    padding-right: 5rem;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.M};
    text-align: right;
    &:focus {
      border: 2px solid ${({ theme }) => theme.color.grayscale.line};
      background-color: ${({ theme }) => theme.color.grayscale.offWhite};
    }
  }
`;

const RefreshButton = styled(Button)`
  position: absolute;
  right: 3.5rem;
  top: 0.5rem;
`;
