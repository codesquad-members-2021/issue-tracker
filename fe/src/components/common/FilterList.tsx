import FilterItem from './FilterItem';
import { FilterItemType, FilterListType } from '../../types/filterType';
import styled from 'styled-components';
import { forwardRef, Ref } from 'react';

const FilterList = ({ filterTitle, filterList }: FilterListType,ref:Ref<HTMLElement>) => {
  return (
    <>
      <MenuTitle>{filterTitle} 필터</MenuTitle>
      {filterList.map((filterItem: FilterItemType, idx) => {
        return <FilterItem key={idx} filterItem={filterItem} isEnd={filterList.length -1 ===idx} ref={ref} />;
      })}
    </>
  );
};

const MenuTitle = styled.div`
  ${({ theme }) => theme.style.upperWrapper}
  padding: 0.7rem 1rem;
`;
export default forwardRef(FilterList);
