import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { hoverGrey } from 'style/Theme';
import { MilestoneType } from 'components/common/tabModal/tapDataType';
import { ReactComponent as RadioButton } from 'assets/icon/RadioButton.svg';

interface Props {
  milestone: MilestoneType;
  selected: boolean;
}

export default function MilestoneSelectItem({
  milestone: { title },
  selected,
}: Props): ReactElement {
  return (
    <MilestoneSelectItemBlock>
      <div>{title}</div>
      {selected && <RadioButton />}
    </MilestoneSelectItemBlock>
  );
}

const MilestoneSelectItemBlock = styled(hoverGrey)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
`;
