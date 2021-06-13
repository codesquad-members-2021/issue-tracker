import { TabComponents as S } from "../TabStyles";
import { useRecoilState } from "recoil";
import { toggleAddNewLabelState } from "../TabStore";

const AddTabButton = () => {
  const [toggleAddState, setToggleAddState] = useRecoilState(
    toggleAddNewLabelState
  );

  const handleAddBtnClick = () => {
    setToggleAddState(!toggleAddState);
  };

  return (
    <>
      {toggleAddState ? (
        <S.WriteIssueBtn
          onClick={handleAddBtnClick}
          backgroundcolor="white"
          fontcolor="#007AFF"
        >
          x 닫기
        </S.WriteIssueBtn>
      ) : (
        <S.WriteIssueBtn onClick={handleAddBtnClick}>+ 추가</S.WriteIssueBtn>
      )}
    </>
  );
};

export default AddTabButton;
