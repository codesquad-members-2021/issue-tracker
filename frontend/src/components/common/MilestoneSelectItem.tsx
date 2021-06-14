import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { hoverGrey } from 'style/Theme';

interface Props {
  title: string;
}

export default function MilestoneSelectItem({ title }: Props): ReactElement {
  return <MilestoneSelectItemBlock>{title}</MilestoneSelectItemBlock>;
}

const MilestoneSelectItemBlock = styled(hoverGrey)`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 12px 16px;
  cursor: pointer;
`;
