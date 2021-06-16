import React from 'react'
import styled from 'styled-components';
import FilterTab from '@components/common/FilterTab';
import API from '@/utils/API';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';
import ArrowBottomIcon from '@/Icons/ArrowBottom.svg';

const filterNames: { [key: string]: { apiName: string; name: string } } = {
  manager: { apiName: 'users', name: '담당자' },
  label: { apiName: 'labels', name: '레이블' },
  milestone: { apiName: 'milestones', name: '마일스톤' },
  writer: { apiName: 'users', name: '작성자' }
}

type FilterItemType = {
  title: string;
  handleClickShowFilterModal: (title: string) => () => void;
}

const FilterItem = ({ title, handleClickShowFilterModal }: FilterItemType) => {
  const { apiName } = filterNames[title];
  const [users] = useFetch(API.get[apiName]);
  const { data }: AsyncState<any, any> = users;

  return (
    <FilterWrapper>
      <div onClick={handleClickShowFilterModal(title)}>
        <FilterTitleSpan>{filterNames[title].name}</FilterTitleSpan>
        <ArrowImageTag src={ArrowBottomIcon} alt="" />
      </div>
      {data &&
        <FilterTab
          header={title}
          filterList={data.map(({ name }: { name: string }) => name)} />
      }
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
