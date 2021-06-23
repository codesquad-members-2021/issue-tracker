import { Button } from '@material-ui/core';
import { MouseEvent } from 'react';
import { ReactChild, ReactNode } from 'react';
import styled from 'styled-components';

const CreateButton = ({
  children,
  onClick,
  icon,
  white,
}: {
  children: ReactChild;
  onClick: (event: MouseEvent) => void;
  icon: ReactNode;
  white?: boolean;
}) => {
  return (
    <StyledCreateButton
      background={Boolean(white)}
      onClick={onClick}
      startIcon={icon}
    >
      {children}
    </StyledCreateButton>
  );
};

export default CreateButton;

const StyledCreateButton = styled(Button)<{ background: boolean }>`
  border: 3px solid ${({ theme }) => theme.color.blue};
  stroke: ${({ theme, background }) =>
    background ? theme.color.blue : theme.color.grayscale.offWhite};
  background-color: ${({ theme, background }) =>
    background ? theme.color.grayscale.offWhite : theme.color.blue};
  color: ${({ theme, background }) =>
    background ? theme.color.blue : theme.color.grayscale.offWhite};
  font-weight: ${({ theme }) => theme.fontWeight.bold1};
  width: 7.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin-left: 1rem;
  &:hover {
    ${({ theme, background }) => {
      if (background) return `stroke: ${theme.color.darkBlue}; color: ${theme.color.darkBlue};`;
      else return `background-color: ${theme.color.darkBlue};`;
    }}
    border: 3px solid ${({ theme }) => theme.color.darkBlue};
`;
