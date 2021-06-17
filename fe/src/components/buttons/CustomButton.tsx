import { Button } from '@material-ui/core';
import { ReactChild } from 'react';
import styled from 'styled-components';

const CustomButton = ({ children }: { children: ReactChild }) => {
  return <StyledCreateButton size="large">{children}</StyledCreateButton>;
};

export default CustomButton;

const StyledCreateButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.grayscale.offWhite};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  /* width: 7.5rem;
  height: 2.5rem; */
  width: 15rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin-left: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
`;
