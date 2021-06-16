import React from 'react'
import styled from 'styled-components';
import Label from '@components/common/Label';
import IconButton from '@components/common/IconButton';
import { LabelItemType } from '@components/common/types/LabelType';

const LabelItem = ({ name, color, description, setToggleItem }: LabelItemType) => {
  return (
    <>
      <LabelWrapper>
        <Label {...{ name, color }} />
      </LabelWrapper>
      <DescWrapper>
        {description}
      </DescWrapper>
      <ButtonsWrapper>
        <IconButton icon="edit" >
          편집
        </IconButton>
        <IconButton icon="trash">
          삭제
        </IconButton>
      </ButtonsWrapper>
    </>
  )
}


const LabelWrapper = styled.div`
  width: 208px;
  place-items: center;
`;

const DescWrapper = styled.div`
  color: #6E7191;
`;

const ButtonsWrapper = styled.div`
    margin-inline-start: auto;
`;

export default LabelItem;
