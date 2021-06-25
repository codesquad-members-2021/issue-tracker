import React, { useCallback } from 'react'
import HeadContent from '@components/issueList/HeadContent';
import IssueList from '@components/issueList/IssueList';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import { filterModalAtom, FilterBooleanType } from '@/components/common/atoms/filterAtom';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';

const IssueListPage = () => {
  const [, setFilterModalState] = useRecoilState(filterModalAtom);
  const handleClickShowFilterModal = useCallback((title: string) => () => {
    setFilterModalState((filterModalState: FilterBooleanType) => ({ ...filterModalState, [title]: true }));
  }, []);

  return (
    <>
      <HeadContent {...{ handleClickShowFilterModal }} />
      <ListWrapper wrapWidth="100%">
        <IssueList {...{ handleClickShowFilterModal }} />
      </ListWrapper>
    </>
  )
}

export default IssueListPage;
