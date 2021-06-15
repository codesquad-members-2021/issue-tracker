import Modal from "@/Components/AtomicComponents/Modal/Modal";
import { IssueTable as S } from "@/Components/Home/HomeStyles";

const StateDropDown = () => {
  const IssueDropDownMock = ["이슈닫기", "이슈열기"];
  return (
    <S.TableCategoryModal>
      <Modal modalTitle={"이슈"} modalDataArray={IssueDropDownMock} />
    </S.TableCategoryModal>
  );
};

export default StateDropDown;
