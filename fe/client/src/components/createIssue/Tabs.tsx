import React, { useCallback } from 'react'
import styled from 'styled-components';
import PlusIcon from '@/Icons/Plus.svg';
import FilterTab from '@components/common/FilterTab';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { filterAtom, FilterBooleanType } from '../common/atoms/filterAtom';

const tabItems = [
  { name: '담당자', title: 'manager' },
  { name: '레이블', title: 'label' },
  { name: '마일스톤', title: 'milestone' }
];

const mockup = ['비모', '비모2', '비모3'];
const Tabs = () => {
  const [, setFilterModalState] = useRecoilState(filterAtom);

  const handleClickShowFilterModal = useCallback((title: string) => () => {
    setFilterModalState((filterModalState: FilterBooleanType) => ({ ...filterModalState, [title]: true }));
  }, []);

  return (
    <TabsWrapper>
      {tabItems.map(({ name, title }) => {
        return (
          <TabItems key={name}>
            <TabContents onClick={handleClickShowFilterModal(title)}>
              <span>{name}</span>
              <img src={PlusIcon} alt="" />
            </TabContents>
            <FilterTab
              header={title}
              filterList={mockup} />
          </TabItems>
        )
      })}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  min-width: 308px;
  height: max-content;
  margin-left: 32px;
  background:#fff;
  border:1px solid #D9DBE9;
  border-radius: 11px;
  color:#6E7191;
  font-weight:700;
`;

const TabItems = styled.div`
  position: relative;
  & + & {
    border-top:1px solid #D9DBE9;
  }
  :hover {
    cursor:pointer;
  }
`;

const TabContents = styled.div`
   padding: 34px 32px;
   display:flex;
   justify-content: space-between;
`;
export default Tabs;
