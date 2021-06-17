import { AddNewModal as S, TabAssets as Icon } from "../../TabStyles";
import { toggleEditLabelState } from "../../TabStore";
import { useSetRecoilState } from "recoil";
import EditLabelView from "./EditLabelView";

type LabelEditProps = {
  id: number;
};

const LabelAddModal = ({ id }: LabelEditProps) => {
  const setLabelEditState = useSetRecoilState(toggleEditLabelState);

  const handleEditCloseBtnClick = () => {
    setLabelEditState({
      isOpen: false,
      rowId: id,
    });
  };

  return (
    <S.AddModalDiv isLabel={true}>
      <S.AddModalTitle>레이블 편집</S.AddModalTitle>
      <S.ModalContent>
        <S.ModalLeft>
          <EditLabelView />
        </S.ModalLeft>
        <S.ModalRight>
          <S.InputWrapper>
            <S.Input placeholder="레이블 이름" />
            <S.Input placeholder="설명 (선택)" />
          </S.InputWrapper>
          <S.ChangeColorContainer>
            <S.ChangeBackgroundDiv>
              <S.ColorTitle>배경색상</S.ColorTitle>
              <S.BackgroundColorContent>
                <S.Input placeholder="색 입력" />
              </S.BackgroundColorContent>
              <Icon.RefreshIcon />
            </S.ChangeBackgroundDiv>
            <S.ChangeFontColorDiv>
              <S.ColorTitle>텍스트 색상</S.ColorTitle>
              <S.FontColorRadioContent>
                <input name="labelFontColor" type="radio" />
                어두운 색
              </S.FontColorRadioContent>
              <S.FontColorRadioContent>
                <input name="labelFontColor" type="radio" />
                밝은 색
              </S.FontColorRadioContent>
            </S.ChangeFontColorDiv>
          </S.ChangeColorContainer>
          <S.FinishWriteBtnDiv>
            <S.Canclebtn onClick={handleEditCloseBtnClick}>취소</S.Canclebtn>
            <S.FinishWriteBtn onClick={handleEditCloseBtnClick}>
              + 완료
            </S.FinishWriteBtn>
          </S.FinishWriteBtnDiv>
        </S.ModalRight>
      </S.ModalContent>
    </S.AddModalDiv>
  );
};

export default LabelAddModal;
