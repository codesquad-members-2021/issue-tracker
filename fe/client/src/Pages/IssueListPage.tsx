import React, { useCallback } from 'react'
import HeadContent from '@components/issueList/HeadContent';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import ListHeader from '@components/issueList/ListHeader';
import ListItem from '@components/issueList/ListItem';
import API from '@/utils/API';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';
import { IssueListItemType } from '@components/common/types/APIType';
import { filterAtom, FilterBooleanType } from '@/components/common/atoms/filterAtom';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';

const IssueListPage = () => {
  const [issueItems] = useFetch(API.get.issues);
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
            <ListHeader issueItems={data} {...{ handleClickShowFilterModal }} />
            {data.map((issueItem: IssueListItemType) => {
              return <ListItem key={issueItem.id} {...{ issueItem }} />
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
