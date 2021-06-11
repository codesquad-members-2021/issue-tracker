import ModalItem from "./ModalItem";
import { Modal as S } from "../AtomicComponentsStyles";

type ModalProps = {
  modalDataArray: any[];
  modalTitle: string;
};

const Modal = ({ modalDataArray, modalTitle }: ModalProps) => {
  return (
    <S.ModalDiv>
      <S.ModalTitleDiv>{modalTitle}필터</S.ModalTitleDiv>
      {modalDataArray.map((data, index) => (
        <ModalItem data={data} index={index} key={index} />
      ))}
    </S.ModalDiv>
  );
};

export default Modal;
