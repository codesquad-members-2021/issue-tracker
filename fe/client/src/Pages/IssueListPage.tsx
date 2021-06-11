import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components';
import HeadContent from '@components/issueList/HeadContent';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import ListHeader from '@components/issueList/ListHeader';
import ListItem from '@components/issueList/ListItem';
import API from '@/utils/API';
import useAsync2, { AsyncState } from '@/utils/hook/useAsync';
import { IssueListItemType } from '@components/common/types/APIType';
import { filterAtom, FilterBooleanType } from '@/components/common/atoms/filterAtom';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';

const IssueListPage = () => {
  const [issueItems] = useAsync2(API.get.issues);
  const { data, loading, error }: AsyncState<any, any> = issueItems;
  const [, setFilterModalState] = useRecoilState(filterAtom);

  const handleClickShowFilterModal = useCallback((title: string) => () => {
    setFilterModalState((filterModalState: FilterBooleanType) => ({ ...filterModalState, [title]: true }));
  }, []);

  return (
    <>
      <HeadContent {...{ handleClickShowFilterModal }} />
      <ListWrapper wrapWidth="100%">
        {
          data && <>
            <ListHeader issueItems={data} {...{handleClickShowFilterModal}}/>
            {data.map((issueItem: IssueListItemType, idx: number) => {
              return <ListItem key={`issueListItem-${idx}`} {...{ issueItem }} />
            })}
          </>
        }
        {loading && <>loading...</>}
        {error && <>error...</>}
      </ListWrapper>
    </>
  )
}


export default IssueListPage;
