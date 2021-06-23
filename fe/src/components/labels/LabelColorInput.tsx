import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { ReactComponent as RefeshSvg } from 'icons/IconsRefresh.svg';

const LabelColorInput = ({
    onChange,
  }: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <StyledInput>
        <label>배경색상</label>
        <input onChange={onChange} />
        <Button><RefeshSvg/></Button>
      </StyledInput>
    );
  };
  
  export default LabelColorInput;
  
  const StyledInput = styled.div`
    width: fit-content;
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
      width: 15rem;
      background-color: ${({ theme }) => theme.color.grayscale.line};
      border: none;
      font-size: ${({ theme }) => theme.fontSize.M};
      text-align:right;
    }
  `;
  