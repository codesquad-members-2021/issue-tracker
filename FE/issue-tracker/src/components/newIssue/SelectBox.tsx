import styled from 'styled-components';

import SelectAssignee from './SelectAssignee';
import SelectLabel from './SelectLabel';
import SelectMilestone from './SelectMilestone';

function SelectBox() {
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
