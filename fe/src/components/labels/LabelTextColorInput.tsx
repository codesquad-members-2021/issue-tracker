import { Button, Checkbox } from '@material-ui/core';

import styled from 'styled-components';
import { ReactComponent as CheckOff } from 'icons/check-off-circle.svg';
import { ReactComponent as CheckOn } from 'icons/check-on-circle.svg';

const LabelTextColorInput = () => {
  return (
    <StyledInput>
      <label>텍스트 색상</label>
      <Button>
        <>
          <Checkbox
            checked={true}
            icon={<CheckOff />}
            checkedIcon={<CheckOn />}
          />
          어두운색
        </>
      </Button>
      <Button>
        <>
          <Checkbox icon={<CheckOff />} checkedIcon={<CheckOn />} />
          밝은색
        </>
      </Button>
    </StyledInput>
  );
};

export default LabelTextColorInput;

const StyledInput = styled.div`
  padding-right: 1.2rem;
  width: fit-content;
  background-color: ${({ theme }) => theme.color.grayscale.line};
  display: flex;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin: 0.5rem 1rem;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.grayscale.label};
    font-size: ${({ theme }) => theme.fontSize.S};
  }
`;
