import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const CheckBox = () => {
  const foo = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div>
      <Box type="checkbox" onChange={foo} />
    </div>
  );
};

const Box = styled.input`
  width: 18px;
  height: 18px;
  background: ${props => props.theme.greyscale.offWhite};
  border: 1px solid #d9dbe9;
  box-sizing: border-box;
  border-radius: 2px;
`;

export default CheckBox;
