import { Button } from '@material-ui/core';
import { ReactComponent as PlusIconSvg } from 'icons/pluse.svg';
import { MouseEvent } from 'react';
import { ReactChild } from 'react';
import styled from 'styled-components';

const CreateButton = ({
  children,
  onClick,
}: {
  children: ReactChild;
  onClick: ( event : MouseEvent) => void
}) => {
  return (
    <StyledCreateButton onClick={onClick} startIcon={<PlusIcon />}>
      {children}
    </StyledCreateButton>
  );
};

export default CreateButton;

const StyledCreateButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.grayscale.offWhite};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  width: 7.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin-left: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
`;

const PlusIcon = styled(PlusIconSvg)`
  path {
    stroke: ${({ theme }) => theme.color.grayscale.offWhite};
  }
`;
