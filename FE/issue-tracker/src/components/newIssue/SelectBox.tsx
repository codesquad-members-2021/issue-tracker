import { useEffect } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import SelectAssignee from './select/SelectAssignee';
import SelectLabel from './select/SelectLabel';
import SelectMilestone from './select/SelectMilestone';
import {
  checkedAssigneesAtom,
  checkedLabelsAtom,
  checkedMilestoneAtom,
} from '@store/atoms/checkedThings';
import { isClickedCompleteBtnAtom } from '@store/atoms/newIssue';

function SelectBox() {
  const setCheckedAssignees = useSetRecoilState(checkedAssigneesAtom);
  const setCheckedLabels = useSetRecoilState(checkedLabelsAtom);
  const setCheckedMilestone = useSetRecoilState(checkedMilestoneAtom);
  const isClickedCompleteBtn = useRecoilValue(isClickedCompleteBtnAtom);

  useEffect(() => {
    if (!isClickedCompleteBtn) {
      setCheckedAssignees([]);
      setCheckedLabels([]);
      setCheckedMilestone(null);
    }
  }, [
    isClickedCompleteBtn,
    setCheckedAssignees,
    setCheckedLabels,
    setCheckedMilestone,
  ]);

  return (
    <SelectBoxWrap>
      <SelectAssignee />
      <SelectLabel />
      <SelectMilestone />
    </SelectBoxWrap>
  );
}

export default SelectBox;

const SelectBoxWrap = styled.div`
  width: 308px;
  background: ${({ theme }) => theme.colors.gr_offWhite};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-radius: ${({ theme }) => theme.radii['2xl']};
`;
