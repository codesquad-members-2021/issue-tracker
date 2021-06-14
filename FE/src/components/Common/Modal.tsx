import styled from 'styled-components';
import { useRef } from 'react';
import { TChildren } from '../../util/types';

export interface IModal {
  children?: TChildren;
  isModalVisible: boolean;
  setIsModalVisible: (flag: boolean) => void;
  onClick?: (e: React.MouseEvent | MouseEvent) => void;
}

const Modal = ({ isModalVisible, setIsModalVisible, children, ...props }: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseClick = (e: React.MouseEvent | MouseEvent) => {
    /*
    // 임시
    const target = e.target as HTMLElement;
    const modalWrap = modalRef.current;
    if (target !== modalWrap) return;
    setIsModalVisible(!isModalVisible);
    */
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ModalLayout
      {...props}
      isModalVisible={isModalVisible}
      ref={modalRef}
      onClick={handleCloseClick}
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
