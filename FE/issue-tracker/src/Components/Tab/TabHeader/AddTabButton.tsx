import { TabComponents as S } from "../TabStyles";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  toggleAddNewMilestoneState,
  toggleAddNewLabelState,
  currentTabState,
} from "../TabStore";

const AddTabButton = () => {
  const [toggleAddMilestoneState, setToggleAddMilestoneState] = useRecoilState(
    toggleAddNewMilestoneState
  );
  const [toggleAddLabelState, setToggleAddLabelState] = useRecoilState(
    toggleAddNewLabelState
  );
  const tabState = useRecoilValue(currentTabState);

  const handleAddBtnClick = () => {
    if (tabState === "label") setToggleAddLabelState(!toggleAddLabelState);
    else setToggleAddMilestoneState(!toggleAddMilestoneState);
  };

  return (
    <>
      {toggleAddMilestoneState ? (
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
