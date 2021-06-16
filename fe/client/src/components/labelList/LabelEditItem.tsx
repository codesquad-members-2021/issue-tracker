import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { InputAdornment } from '@material-ui/core';
import Label from '@components/common/Label';
import TitleInput from '@components/common/TitleInput';
import IconButton from '@components/common/IconButton';
import { LabelItemType } from '@components/common/types/LabelType';
import { getRandomColor } from '@/utils/serviceUtils';
import RefreshIcon from '@/Icons/Refresh.svg';

const LabelEditItem = ({ name, color, description, setToggleItem }: LabelItemType) => {
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
      <LabelEditTitle>레이블 편집</LabelEditTitle>
      <ContentsWrapper>
        <LabelWrapper>
          <Label {...{ name }} color={colorState} />
        </LabelWrapper>
        <InputsWrapper>
          <TitleInput defaultValue={name} label='레이블이름' />
          <TitleInput defaultValue={description} label='설명(선택)' />
          <TitleInput inputRef={colorInputColRef} defaultValue={color} label='배경 색상'
            width="30%" endAdornment={reFreshButton} />
          <IconButtonsWrapper>
            <IconButton variant="outlined" color="primary"
              icon='close' height="40px" margin="0 8px 0 0" onClick={setToggleItem}>
              취소
            </IconButton>
            <IconButton variant="contained" color="primary"
              icon='edit' height="40px" background="#007AFF">
              완료
            </IconButton>
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
export default LabelEditItem;
