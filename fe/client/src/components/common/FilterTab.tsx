import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { filterAtom, filterDefaultCheckerAtom, FilterStringType } from './atoms/filterAtom';

type FilterTabType = {
  header: string;
  filterList: Array<string>;
}

const filterHeaderNames: { [key: string]: string } = {
  issue: '이슈',
  manager: '담당자',
  label: '레이블',
  milestone: '마일스톤',
  writer: '작성자'
}

const FilterTab = ({ header, filterList }: FilterTabType) => {
  const [filterModalState, setFilterModalState] = useRecoilState(filterAtom);
  const [defaultCheckerState, setDefaultCheckerState] = useRecoilState(filterDefaultCheckerAtom);

  const handleClickHideFilterModal = useCallback((event: MouseEvent) => {
    const targetList = (event.target as HTMLElement);
    const checkTarget = targetList.closest('.filterTab');
    if (checkTarget) return;
    setFilterModalState({
      issue: false,
      manager: false,
      label: false,
      milestone: false,
      writer: false,
    })
  }, []);

  const handleChangeDefaultChecker = useCallback((listItem: string) => () => {
    setDefaultCheckerState((state: FilterStringType) => ({ ...state, [header]: listItem }));
  }, []);

  useEffect(() => {
    if (Object.values(filterModalState).every(v => !v)) return;
    document.addEventListener('click', handleClickHideFilterModal);
    return () => document.removeEventListener('click', handleClickHideFilterModal);
  }, [filterModalState]);

  return (
    <FilterTabWrapper className="filterTab" isShow={filterModalState[header]}>
      <FilterTabHeader>{filterHeaderNames[header]} 필터</FilterTabHeader>
      {filterList.map((listItem, idx) => {
        return (<div key={`${header}-${idx}`}>
          <FilterLabel>
            <input type="radio" name="filter"
              onChange={handleChangeDefaultChecker(listItem)}
              defaultChecked={defaultCheckerState[header] === listItem} />
            <span>{listItem}</span>
          </FilterLabel>
        </div>)
      })}
    </FilterTabWrapper>
  )
}

const FilterTabWrapper = styled.div<{ isShow: boolean }>`
  position: absolute;
  width: 200px;
  top:35px;
  left: 0;
  z-index: 1;
  border:1px solid #d9dbe9;
  background: #FEFEFE;
  border-radius: 11px;
  box-shadow:0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  display:${({ isShow }) => isShow ? 'block' : 'none'};
  > div{
    padding: .5rem;
  }
  div + div{
    border-top:1px solid #d9dbe9;
  }
  &:hover{
    cursor:default;
  }
`

const FilterTabHeader = styled.div`
  background:#F7F7FC;
  border-radius: 11px 11px 0 0;
`;


const FilterLabel = styled.label`
  display:flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  & > span{
    color: #A3A1B0;
    font-size: 12px;
  }
  & > :checked + span{
    color: #000;
  }
  &:hover{
    cursor:pointer;
  }
`;

export default FilterTab;
