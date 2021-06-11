import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";

const DeleteButton = () => {
  return (
    <S.TableButtonDiv>
      <Icon.TrashIcon />
      삭제
    </S.TableButtonDiv>
  );
};

export default DeleteButton;
