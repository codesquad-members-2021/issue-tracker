import styled from 'styled-components';
import { TChildren } from '../../util/types';

export interface IModal {
  children?: TChildren;
  className?: string;
  isModalVisible: boolean;
}

const Modal = ({ className, isModalVisible, children, ...props }: IModal) => {
  return (
    <ModalLayout
      {...props}
      className={className}
      isModalVisible={isModalVisible}
    >
      {children}
    </ModalLayout>
  );
};

export default Modal;

// --- Styled Components ---
const ModalLayout = styled.div<{ isModalVisible: boolean }>`
  display: flex;
  visibility: ${({ isModalVisible }) =>
    isModalVisible ? 'visible' : 'hidden'};
`;
