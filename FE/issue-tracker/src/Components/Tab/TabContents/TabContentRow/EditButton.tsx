import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";
import { toggleEditLabelState } from "../../TabStore";
import { useSetRecoilState } from "recoil";

type editButtonProp = {
  id: number;
};

const EditButton = ({ id }: editButtonProp) => {
  const setEditState = useSetRecoilState(toggleEditLabelState);

  const handleEditClick = () => {
    setEditState({
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
