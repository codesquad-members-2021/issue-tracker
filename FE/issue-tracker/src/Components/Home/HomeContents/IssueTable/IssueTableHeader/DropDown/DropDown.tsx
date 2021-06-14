import Modal from "@/Components/AtomicComponents/Modal/Modal";
import { IssueTable as S } from "@/Components/Home/HomeStyles";

type dropDownProps = {
  modalTitle: string;
};

const DropDown = ({ modalTitle }: dropDownProps) => {
  const dropDownMock = [`${modalTitle}가 없는 이슈`];

  return (
    <S.TableCategoryModal>
      <Modal modalTitle={modalTitle} modalDataArray={dropDownMock} />
    </S.TableCategoryModal>
  );
};

export default DropDown;
