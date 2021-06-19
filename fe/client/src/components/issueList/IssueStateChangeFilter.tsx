import React from 'react'
import FilterTab from '@components/common/FilterTab';
import styled from 'styled-components';
import ArrowBottomIcon from '@/Icons/ArrowBottom.svg';

type IssueStateChangeFilterType = {
  title: string;
  handleClickShowFilterModal: (title: string) => () => void
}
const filterItems = [
  { name: '선택한 이슈 열기' },
  { name: '선택한 이슈 닫기' }
];

const IssueStateChangeFilter = ({ title, handleClickShowFilterModal }: IssueStateChangeFilterType) => {
  return (
    <FilterWrapper>
      <div onClick={handleClickShowFilterModal(title)}>
        <FilterTitleSpan>상태 수정</FilterTitleSpan>
        <ArrowImageTag src={ArrowBottomIcon} alt="" />
      </div>
      <FilterTab
        inputType='radio'
        header={title}
        filterList={filterItems} />
    </FilterWrapper>
  )
}
const FilterWrapper = styled.div`
  display: flex;
  position: relative;
  &:hover{
    cursor:pointer;
  }
`;

const ArrowImageTag = styled.img`
  width: 16px;
  height: 16px;
  transform: translateY(3px);
`;

const FilterTitleSpan = styled.span`
  max-width: 70px;
  padding-right: 10px;
  line-height: 24px;
`;

export default IssueStateChangeFilter;
