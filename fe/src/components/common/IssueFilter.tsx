import { Button } from '@material-ui/core';
import { createRef, useState } from 'react';
import styled from 'styled-components';
import FilterList from './FilterList';
import { ReactComponent as ArrowDown } from 'icons/arrow-down.svg';
import Popover from '@material-ui/core/Popover';
const testArray = [
  { id: 1, description: '테스트필터1' },
  { id: 2, description: '테스트필터2' },
  { id: 3, description: '테스트필터3' },
  { id: 4, description: '테스트필터4' },
];

export default function IssueFilter() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const ref = createRef();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FilterButton variant="contained" onClick={handleClick}>
        필터 <ArrowDownIcon aria-checked={Boolean(anchorEl)} />
      </FilterButton>
      <CustomMenu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        ref={ref}
      >
        <FilterList filterTitle="이슈" filterList={testArray} />
      </CustomMenu>
    </>
  );
}

const FilterButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.grayscale.background};
  color: ${({ theme }) => theme.color.grayscale.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  box-shadow: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const ArrowDownIcon = styled(ArrowDown)`
  margin-left: 1rem;
  &[aria-checked='true'] {
    transform: rotate(180deg);
  }

  path {
    stroke: ${({ theme }) => theme.color.grayscale.label};
  }
`;

const CustomMenu = styled(Popover)`
  margin-top: 0.5rem;
  .MuiPaper-elevation8 {
    border-radius: 25px;
    background-color: ${({ theme }) => theme.color.grayscale.inputBG};
  }
`;
