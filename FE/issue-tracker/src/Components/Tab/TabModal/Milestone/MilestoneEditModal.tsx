import { AddNewModal as S } from "../../TabStyles";
import { toggleEditMilestoneState } from "../../TabStore";
import { useSetRecoilState } from "recoil";

type MilesEditProps = {
  id: number;
};

const MilestoneEditModal = ({ id }: MilesEditProps) => {
  const setMilestoneEditState = useSetRecoilState(toggleEditMilestoneState);

  const handleEditCloseBtnClick = () => {
    setMilestoneEditState({
      isOpen: false,
      rowId: id,
    });
  };

  return (
    <S.AddModalDiv isLabel={false}>
      <S.AddModalTitle>마일스톤 편집</S.AddModalTitle>
      <S.ModalMileContent>
        <S.ModalContent>
          <S.MilestoneSmallInputDiv>
            <S.Input placeholder="마일스톤 이름" />
          </S.MilestoneSmallInputDiv>
          <S.MilestoneSmallInputDiv>
            <S.Input placeholder="완료일(선택) ex.YYYY-MM-DD" />
          </S.MilestoneSmallInputDiv>
        </S.ModalContent>
        <S.Input placeholder="설명(선택)" />
        <S.FinishWriteBtnDiv>
          <S.FinishWriteBtn onClick={handleEditCloseBtnClick}>
            + 완료
          </S.FinishWriteBtn>
        </S.FinishWriteBtnDiv>
      </S.ModalMileContent>
    </S.AddModalDiv>
  );
};

export default MilestoneEditModal;
