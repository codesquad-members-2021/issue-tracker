import React from 'react'
import styled from 'styled-components';
import { InputAdornment } from '@material-ui/core';
import Label from '@components/common/Label';
import InputField from '@/components/common/InputField';
import { getRandomColor } from '@/utils/serviceUtils';
import RefreshIcon from '@/Icons/Refresh.svg';

type NewLabelType = {
  title: string;
  labelNameState: {
    value: string;
    onChange: Function;
  }
  labelDescState: {
    value: string;
    onChange: Function;
  }
  labelColorState: {
    value: string;
    onChange: Function;
  }
  children: React.ReactNode;
}

const NewLabel = ({ labelNameState, labelDescState, labelColorState, title, children }: NewLabelType) => {
  const handleClickRefreshColor = ({ target }: { target: any }) => {
    labelColorState.onChange({ target }, getRandomColor());
  }

  const reFreshButton = (<InputAdornment position="end" onClick={handleClickRefreshColor}>
    <ImageTag src={RefreshIcon} alt="" />
  </InputAdornment>);

  return (
    <LabelEditItemWrapper>
      <LabelEditTitle>{title}</LabelEditTitle>
      <ContentsWrapper>
        <LabelWrapper>
          <Label name={labelNameState.value} color={labelColorState.value} />
        </LabelWrapper>
        <InputsWrapper>
          <InputField {...labelNameState} label='레이블이름' />
          <InputField {...labelDescState} label='설명(선택)' />
          <InputField {...labelColorState} label='배경 색상'
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
