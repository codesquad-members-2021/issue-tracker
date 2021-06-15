import { Button } from '@material-ui/core';
import { createRef, useState } from 'react';
import styled from 'styled-components';
import FilterList from './FilterList';
import { ReactComponent as ArrowDown } from 'icons/arrow-down.svg';
import Popover from '@material-ui/core/Popover';
import { FilterPropsType, FilterSelectorType } from 'types/filterType';
import { useRecoilValue } from 'recoil';
import { filterSelector, labelQuery } from 'store';

export default function Filter({ filterType }: FilterPropsType) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const ref = createRef();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dataList = useRecoilValue(filterSelector);
  // let list;
  // if (dataList) {
  //   list = dataList[filterType];
  // }
  const getFilterTitle = (filterType: FilterSelectorType) =>
    ({
      milestoneList: '마일스톤',
      labelList: '레이블',
    }[filterType]);

  // authorList: '작성자',
  // assigneeList: '담당자',
  return (
    <>
      <FilterButton onClick={handleClick}>
        {getFilterTitle(filterType)}
        <ArrowDownIcon aria-checked={Boolean(anchorEl)} />
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
        <FilterList
          filterTitle={getFilterTitle(filterType)}
          filterList={dataList[filterType]}
        />
      </CustomMenu>
    </>
  );
}

const FilterButton = styled(Button)`
  color: ${({ theme }) => theme.color.grayscale.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  box-shadow: none;
`;

const ArrowDownIcon = styled(ArrowDown)`
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
