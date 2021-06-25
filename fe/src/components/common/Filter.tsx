import { Button } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import FilterList from './FilterList';
import { ReactComponent as ArrowDown } from 'icons/arrow-down.svg';
import { ReactComponent as PlusIconSvg } from 'icons/plus.svg';
import Popover from '@material-ui/core/Popover';
import { FilterPropsType } from 'types/filterType';
import { useRecoilValue } from 'recoil';
import { filterSelector } from 'store';
import { getTitle } from 'utils/util';

export default function Filter({ isPlus, filterType,value,clickHandler,setState }: FilterPropsType) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dataList = useRecoilValue(filterSelector);
  return (
    <>
      <FilterButton onClick={handleClick}>
        {isPlus ? (
          <PlusIcon />
        ) : (
          <>
            {getTitle(filterType)}
            <ArrowDownIcon aria-checked={Boolean(anchorEl)} />
          </>
        )}
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
      >
        <FilterList
          filterTitle={getTitle(filterType)}
          filterList={dataList[filterType]}
          value={value}
          onClose={handleClose}
          clickHandler={clickHandler}
          setState={setState}
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

const PlusIcon = styled(PlusIconSvg)`
  path {
    stroke: ${({ theme }) => theme.color.grayscale.label};
  }
`;
