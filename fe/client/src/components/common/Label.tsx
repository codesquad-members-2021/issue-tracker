import React from 'react'
import styled from 'styled-components';
import { getHexToRGB, getTextColor } from '@/utils/serviceUtils';
import { pipe } from '@/utils/functionalUtils';

type LabelType = {
  name: string;
  color: string;
}

const Label = ({ name, color }: LabelType) => {
  const fontColor = pipe(getHexToRGB, getTextColor)(color);
  return (
    <LabelWrapper {...{ color, fontColor }}>
      {name}
    </LabelWrapper>
  )
}

const LabelWrapper = styled.span<{ color: string; fontColor: string }>`
  padding: 4px 16px;
  background: ${({ color }) => color};
  font-size: 12px;
  border-radius: 30px;
  line-height:20px;
  font-weight:700;
  color:${({ fontColor }) => fontColor};
  & + &{
    margin-left: 10px;
  }
`;

export default Label;
