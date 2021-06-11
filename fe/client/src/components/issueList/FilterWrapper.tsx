import React from 'react'
import styled from 'styled-components';
import ArrowBottomIcon from '@/Icons/ArrowBottom.svg';
import FilterTab from '@components/common/FilterTab';

const filterNames: { [key: string]: { api: string; name: string } } = {
  manager: { api: 'users', name: '담당자' },
  label: { api: 'labels', name: '레이블' },
  milestone: { api: 'milestones', name: '마일스톤' },
  writer: { api: 'users', name: '작성자' }
}

type FilterItemType = {
  title: string;
  handleClickShowFilterModal: (title: string) => () => void;
}

const issueFilterList = [
  '열린 이슈',
  '내가 작성한 이슈',
  '나에게 할당된 이슈',
  '내가 댓글을 남긴 이슈',
  '닫힌 이슈'
];
const FilterItem = ({ title, handleClickShowFilterModal }: FilterItemType) => {
  console.log(123)
  return (
    <FilterWrapper>
      <div onClick={handleClickShowFilterModal(title)}>
        <FilterTitleSpan>{filterNames[title].name}</FilterTitleSpan>
        <ArrowImageTag src={ArrowBottomIcon} alt="" />
      </div>
      <FilterTab
        header={title}
        filterList={issueFilterList} />
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

export default React.memo(FilterItem);
