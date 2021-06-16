import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { hoverGrey } from 'style/Theme';
import { LabelType } from 'components/common/tabModal/tapDataType';
import { ReactComponent as RadioButton } from 'assets/icon/RadioButton.svg';

interface LabelSelectItemProps {
  label: LabelType;
  selected: boolean;
}

export default function LabelSelectItem({
  label: { name, color },
  selected,
}: LabelSelectItemProps) {
  return (
    <LabelSelectItemBlock colorCode={color.backgroundColorCode}>
      <div className='label'>
        <div className='label__label'></div>
        <div className='label__title'>{name}</div>
      </div>
      {selected && <RadioButton />}
    </LabelSelectItemBlock>
  );
}

interface StyledProps {
  colorCode: string;
}

const LabelSelectItemBlock = styled(hoverGrey)<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  .label {
    display: flex;
    align-items: center;
  }
  .label__label {
    width: 20px;
    height: 20px;
    border: 1px solid #d9dbe9;
    background-color: ${({ colorCode }) => colorCode};
    border-radius: 100%;
    margin-right: 8px;
  }
`;
