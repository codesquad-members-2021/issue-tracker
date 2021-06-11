import { AddNewModal as S, TabAssets as Icon } from "../TabStyles";

const LabelAddModal = () => {
  return (
    <S.AddModalDiv>
      <S.AddModalTitle>새로운 레이블 추가</S.AddModalTitle>
      <S.ModalContent>
        <S.ModalLeft>레이블</S.ModalLeft>
        <S.ModalRight>
          <S.InputWrapper>
            <S.Input placeholder="레이블 이름" />
            <S.Input placeholder="설명 (선택)" />
          </S.InputWrapper>
          <S.ChangeColorContainer>
            <S.ChangeBackgroundDiv>
              <S.ColorTitle>배경색상</S.ColorTitle>
              <S.ColorContent>#F0F0F0</S.ColorContent>
              <Icon.RefreshIcon />
            </S.ChangeBackgroundDiv>
            <S.ChangeFontColorDiv>
              <S.ColorTitle>텍스트 색상</S.ColorTitle>
              <S.ColorContent>
                <input name="labelFontColor" type="radio" />
                어두운 색
              </S.ColorContent>
              <S.ColorContent>
                <input name="labelFontColor" type="radio" />
                밝은 색
              </S.ColorContent>
            </S.ChangeFontColorDiv>
          </S.ChangeColorContainer>
          <S.FinishWriteBtnDiv>
            <S.FinishWriteBtn>+ 완료</S.FinishWriteBtn>
          </S.FinishWriteBtnDiv>
        </S.ModalRight>
      </S.ModalContent>
    </S.AddModalDiv>
  );
};

export default LabelAddModal;
