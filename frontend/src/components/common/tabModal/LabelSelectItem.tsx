import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { hoverGrey } from 'style/Theme';
import { LabelType } from 'components/common/tabModal/tapDataType';

interface LabelSelectItemProps {
  label: LabelType;
}

export default function LabelSelectItem({
  label: { name, color },
}: LabelSelectItemProps): ReactElement {
  return (
    <LabelSelectItemBlock colorCode={color.backgroundColorCode}>
      <div className='label__label'></div>
      <div className='label__title'>{name}</div>
    </LabelSelectItemBlock>
  );
}

interface StyledProps {
  colorCode: string;
}

const LabelSelectItemBlock = styled(hoverGrey)<StyledProps>`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 12px 16px;
  cursor: pointer;
  .label__label {
    width: 20px;
    height: 20px;
    border: 1px solid #d9dbe9;
    background-color: ${({ colorCode }) => colorCode};
    border-radius: 100%;
    margin-right: 8px;
  }
`;
