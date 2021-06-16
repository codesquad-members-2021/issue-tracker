import styled from 'styled-components';
import { TChildren } from '../../util/types';

export interface IModal {
  children?: TChildren;
}

const Modal = ({ children, ...props }: IModal) => {
  return (
    <ModalLayout
      {...props}
      id="modal"
    >
      {children}
    </ModalLayout>
  );
};

export default Modal;

// --- Styled Components ---
const ModalLayout = styled.div`
  display: flex;
`;
