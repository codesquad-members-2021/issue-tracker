import React from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { filterAtom } from './atoms/filterAtom';

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

  const handleClickHideFilterModal = (event: MouseEvent) => {
    const targetList = (event.target as HTMLElement);
    const checkTarget = targetList.closest('.filterTab');
    if (!checkTarget) {
      setFilterModalState({
        issue: false,
        manager: false,
        label: false,
        milestone: false,
        writer: false,
      })
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickHideFilterModal);
    return () => document.removeEventListener('click', handleClickHideFilterModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterModalState])

  return (
    <FilterTabWrapper className="filterTab">
      <FilterTabHeader>{filterHeaderNames[header]} 필터</FilterTabHeader>
      {filterList.map((listItem, idx) => {
        return (<div key={`${header}-${idx}`}>
          <FilterLabel>
            <input type="radio" name="filter" />
            <span>{listItem}</span>
          </FilterLabel>
        </div>)
      })}
    </FilterTabWrapper>
  )
}

const FilterTabWrapper = styled.div`
  position: absolute;
  width: 200px;
  top:35px;
  left: 0;
  z-index: 1;
  border:1px solid #d9dbe9;
  background: #FEFEFE;
  border-radius: 11px;
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
