import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../../../styles/atoms/Label';
import Typos from '../../../styles/atoms/Typos';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Refresh } from '../../../icons/refresh.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';

const NewLabel = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );
  const [textColor, setTextColor] = useState({
    darkColor: true,
    brightColor: false,
  });

  const changeColor = () => {
    setBackgroundColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <NewLabelContainer>
      <Typos lg>새로운 레이블 추가</Typos>
      <MainContainer>
        <LabelWrapper>
          <Label background={backgroundColor} />
        </LabelWrapper>
        <InputContainer>
          <TextInput type="text" placeholder="레이블 이름" />
          <TextInput type="text" placeholder="설명(선택)" />
          <ColorOptionContainer>
            <BackgroundColorPicker>
              <Typos xs>배경 색상</Typos>
              <Typos sm> {backgroundColor}</Typos>
              <RefreshWrapper onClick={changeColor}>
                <Refresh />
              </RefreshWrapper>
            </BackgroundColorPicker>
            <TextColorPicker>
              <Typos xs>텍스트 색상</Typos>
            </TextColorPicker>
          </ColorOptionContainer>
          <ButtonWrapper>
            <Buttons disabled small>
              <PlusWrapper>
                <Plus />
              </PlusWrapper>
              완료
            </Buttons>
          </ButtonWrapper>
        </InputContainer>
      </MainContainer>
    </NewLabelContainer>
  );
};

const NewLabelContainer = styled.div`
  height: 345px;
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  background: ${props => props.theme.greyscale.offWhite};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 16px;
`;

const MainContainer = styled.div`
  padding: 24px 0px;
  display: flex;
  justify-content: space-between;
`;
const LabelWrapper = styled.div`
  display: flex;
  margin: 0 auto 6% auto;
  align-items: flex-end;
  justify-content: center;
`;

const TextInput = styled.input`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  margin-bottom: 17px;
  width: 904px;
  height: 40px;
  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 11px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ColorOptionContainer = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 20px;
`;

const BackgroundColorPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 240px;
  margin-right: 16px;
  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 11px;
  div {
    padding: 0 6px;
  }
  svg {
    stroke: ${props => props.theme.greyscale.label};
  }
`;

const RefreshWrapper = styled.div`
  cursor: pointer;
`;

const PlusWrapper = styled.div`
  padding-right: 5px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
  }
`;

const TextColorPicker = styled.div`
  display: flex;
  width: 352px;
  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 11px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default NewLabel;
