import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { hoverGrey } from 'style/Theme';
import { MilestoneType } from 'components/common/tabModal/tapDataType';
import { ReactComponent as RadioButton } from 'assets/icon/RadioButton.svg';
import { selectedMilestoneState } from 'store/issueInfoStore';

interface Props {
  milestone: MilestoneType;
  selected: boolean;
}

export default function MilestoneSelectItem({
  milestone: { title },
  milestone,
  selected,
}: Props): ReactElement {
  const setSelectMilestone = useSetRecoilState(selectedMilestoneState);

  const handleClick = () => {
    if (selected) {
      setSelectMilestone(null);
    } else {
      setSelectMilestone(milestone);
    }
  };

  return (
    <MilestoneSelectItemBlock onClick={handleClick}>
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
