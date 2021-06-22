import styled from 'styled-components';
import { TMouseEvent, TChildren } from '../../util/types';

export interface IDefaultButton {
  onClick?: TMouseEvent;
  disabled?: boolean;
  children?: TChildren;
}

const DefaultButton = ({ children, ...props }: IDefaultButton) => (
  <DefaultButtonLayout {...props}>
    {children}
  </DefaultButtonLayout>
);

export default DefaultButton;

// --- Styled Components ---
const DefaultButtonLayout = styled.button`
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;
  overflow: hidden;
  outline: none;
  border: none;
`;
