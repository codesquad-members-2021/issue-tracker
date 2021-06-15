import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { TChildren } from '../../util/types';

interface IAddButton {
  children?: TChildren;
  btnStyle?: 'medium' | 'small';
}

const PrimaryButton = ({ children, btnStyle = 'medium', ...props }: IAddButton) => (
  <PrimaryButtonLayout variant="contained" {...props}>
    {children}
  </PrimaryButtonLayout>
);
export default PrimaryButton;

// --- Styled Components ---
const PrimaryButtonLayout = styled(Button)<IAddButton>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayScale.offWhite};

  padding: ${({ btnStyle }) => btnStyle === "medium" ? "0 2.4rem" : "0 1.6rem"};
  border-radius: ${({ btnStyle }) => btnStyle === "medium" ? "2.0rem" : "1.1rem"};

  background-color: ${({ theme }) => theme.colors.normal.blue};
  &:hover { background-color: ${({ theme }) => theme.colors.normal.darkBlue}; }
  /* &:focus { border: 1px solid ${({ theme }) => theme.colors.normal.lightBlue}; } */
  &:disabled { opacity: 0.5; }
`;
