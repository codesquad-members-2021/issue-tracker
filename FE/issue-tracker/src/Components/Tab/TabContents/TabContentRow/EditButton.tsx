import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";
import {
  toggleEditLabelState,
  toggleEditMilestoneState,
  currentTabState,
} from "../../TabStore";
import { useSetRecoilState, useRecoilValue } from "recoil";

type editButtonProp = {
  id: number;
};

const EditButton = ({ id }: editButtonProp) => {
  const setLabelEditState = useSetRecoilState(toggleEditLabelState);
  const setMilestoneEditState = useSetRecoilState(toggleEditMilestoneState);
  const tabState = useRecoilValue(currentTabState);

  const handleEditClick = () => {
    if (tabState === "label")
      setLabelEditState({
        isOpen: true,
        rowId: id,
      });
    else
      setMilestoneEditState({
        isOpen: true,
        rowId: id,
      });
  };

  return (
    <S.TableButtonDiv onClick={handleEditClick}>
      <Icon.EditIcon />
      편집
    </S.TableButtonDiv>
  );
};

export default EditButton;
