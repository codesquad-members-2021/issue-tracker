import { AddNewModal as S } from "../../TabStyles";
import { toggleEditLabelState } from "../../TabStore";
import { useSetRecoilState } from "recoil";

const MilestoneAddModal = () => {
  const setEditState = useSetRecoilState(toggleEditLabelState);

  const handleEditCloseBtnClick = () => {
    setEditState({
      isOpen: false,
      rowId: 0,
    });
  };

  return (
    <S.AddModalDiv isLabel={false}>
      <S.AddModalTitle>새로운 마일스톤 추가</S.AddModalTitle>
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

export default MilestoneAddModal;
