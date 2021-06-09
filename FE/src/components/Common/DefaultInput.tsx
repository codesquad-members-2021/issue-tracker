import styled from 'styled-components';
import { TChildren } from '../../util/types';

interface IDefaultInput {
  children?: TChildren;
}

const DefaultInput = ({ children, ...props }: IDefaultInput) => (
  <DefaultInputLayout {...props} />
);

export default DefaultInput;

// --- Styled Components ---
const DefaultInputLayout = styled.input`
  background-color: transparent;
  background-repeat: no-repeat;
  overflow: hidden;
  outline: none;
  border: none;
`;
