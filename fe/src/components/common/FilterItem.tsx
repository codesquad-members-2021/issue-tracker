import { Divider, MenuItem, Checkbox } from '@material-ui/core';
import { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { FilterItemPropsType } from '../../types/filterType';
import { ReactComponent as CheckOff } from 'icons/check-off-circle.svg';
import { ReactComponent as CheckOn } from 'icons/check-on-circle.svg';
const FilterItem = (
  { filterItem, isEnd }: FilterItemPropsType,
  ref: Ref<HTMLElement>
) => {
  return (
    <>
      <StyledFilterItem>
        <span>{filterItem.description}</span>
        <Checkbox icon={<CheckOff />} checkedIcon={<CheckOn />} />
      </StyledFilterItem>
      {isEnd ? null : <Divider />}
    </>
  );
};

const StyledFilterItem = styled(MenuItem)`
  ${({ theme }) => theme.style.flexSpaceBetween}
  width: 12rem;
  background-color: white;
`;

export default forwardRef(FilterItem);
