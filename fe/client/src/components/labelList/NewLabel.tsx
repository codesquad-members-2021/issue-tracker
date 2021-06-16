import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { InputAdornment } from '@material-ui/core';
import Label from '@components/common/Label';
import InputField from '@/components/common/InputField';
import { LabelSwitchType } from '@components/common/types/LabelType';
import { getRandomColor } from '@/utils/serviceUtils';
import RefreshIcon from '@/Icons/Refresh.svg';

type NewLabelType = LabelSwitchType & {
  title: string;
  children: React.ReactNode;
}

const NewLabel = ({ name, color, description,title, children }: NewLabelType) => {
  const colorInputColRef = useRef(null);
  const [colorState, setColorState] = useState(color);

  const handleClickRefreshColor = () => {
    setColorState(getRandomColor());
  }

  useEffect(() => {
    const current = colorInputColRef.current as unknown as HTMLInputElement;
    current.value = colorState;
  }, [colorState]);

  const reFreshButton = (<InputAdornment position="end" onClick={handleClickRefreshColor}>
    <ImageTag src={RefreshIcon} alt="" />
  </InputAdornment>);

  return (
    <LabelEditItemWrapper>
      <LabelEditTitle>{title}</LabelEditTitle>
      <ContentsWrapper>
        <LabelWrapper>
          <Label {...{ name }} color={colorState} />
        </LabelWrapper>
        <InputsWrapper>
          <InputField defaultValue={name} label='레이블이름' />
          <InputField defaultValue={description} label='설명(선택)' />
          <InputField inputRef={colorInputColRef} defaultValue={color} label='배경 색상'
            width="30%" endAdornment={reFreshButton} />
          <IconButtonsWrapper>
            {children}
          </IconButtonsWrapper>
        </InputsWrapper>
      </ContentsWrapper>
    </LabelEditItemWrapper>
  )
}

const LabelEditItemWrapper = styled.div`
  width: 100%;
`;

const LabelEditTitle = styled.div`
  margin-bottom: 24px;
  font-size: 24px;  
  line-height: 40px;
`;

const ContentsWrapper = styled.div`
  display:flex;
`;

const LabelWrapper = styled.div`
    width: 30%;
    place-self: center;
    text-align: center;
`;

const InputsWrapper = styled.div`
  width: 100%;
`;
const IconButtonsWrapper = styled.div`
  text-align: end;
`;

const ImageTag = styled.img`
  &:hover{
    cursor:pointer;
  }
`
export default NewLabel;
