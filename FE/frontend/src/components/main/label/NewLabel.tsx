import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import useMutate from '../../../util/useMutate';
import Label from '../../../styles/atoms/Label';
import Typos from '../../../styles/atoms/Typos';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Refresh } from '../../../icons/refresh.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';

const NewLabel = () => {
  const [input, setInput] = useState({
    title: '',
    content: '',
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  });
  const queryClient = useQueryClient();
  const { mutateAsync, isError } = useMutation(useMutate('label', 'add'));

  const registerNewLabel = async () => {
    await mutateAsync({ data: input });
    queryClient.invalidateQueries(['label', 'getAllData']);
  };

  return (
    <NewLabelContainer>
      <Typos lg>새로운 레이블 추가</Typos>
      <MainContainer>
        <LabelWrapper>
          <Label background={input.color} title={input.title} />
        </LabelWrapper>
        <InputContainer>
          <TextInput
            type="text"
            placeholder="레이블 이름"
            onChange={e => setInput({ ...input, title: e.target.value })}
          />
          <TextInput
            type="text"
            placeholder="설명(선택)"
            onChange={e => setInput({ ...input, content: e.target.value })}
          />
          <ColorOptionContainer>
            <BackgroundColorPicker>
              <Typos xs>배경 색상</Typos>
              <Typos sm> {input.color}</Typos>
              <RefreshWrapper
                onClick={e =>
                  setInput({
                    ...input,
                    color: `#${Math.floor(Math.random() * 16777215).toString(
                      16
                    )}`,
                  })
                }>
                <Refresh />
              </RefreshWrapper>
            </BackgroundColorPicker>
          </ColorOptionContainer>
          <ButtonWrapper onClick={registerNewLabel}>
            <Buttons initial small>
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default NewLabel;
