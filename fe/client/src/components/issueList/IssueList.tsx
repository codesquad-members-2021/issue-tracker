import React, { useEffect } from 'react'
import ListHeader from '@components/issueList/ListHeader';
import ListItem from '@components/issueList/ListItem';
import { IssueListItemType } from '@components/common/types/APIType';
import { issueCheckedItemAtom } from '@components/common/atoms/checkBoxAtom';
import { filterRadioButtonListAtom } from '@components/common/atoms/filterAtom';
import API from '@/utils/API';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';
import { pipe, _ } from '@/utils/functionalUtils';

type IssueListType = {
  handleClickShowFilterModal: (title: string) => () => void;
}

const IssueList = ({ handleClickShowFilterModal }: IssueListType) => {
  const [issueItems] = useFetch(API.get.issues);
  const { data, loading, error }: AsyncState<any, any> = issueItems;
  const [checkedFilteredState, setCheckedFilteredState] = useRecoilState(filterRadioButtonListAtom);

  if (data) {
    console.log(
      pipe(
        _.filter(getFilteredIssueItems('assignees', checkedFilteredState.manager.info.id)),
        _.filter(getFilteredIssueItems('labels', checkedFilteredState.label.info.id)),
        _.filter(getFilteredIssueItems('milestone', checkedFilteredState.milestone.info.id)),
        _.filter(getFilteredIssueItems('author', checkedFilteredState.writer.info.id))
      )(data))
  }

  return (
    <>
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
    </>
  )
}


const getFilteredIssueItems = (filterName: string, targetId: any) => (data: any) => {
  if (!targetId) return data;
  const property = data[filterName];
  if (!Array.isArray(property)) {
    return property.id === targetId;
  } else {
    return property.find(({ id }: { id: number }) => id === targetId);
  }
}
export default IssueList;
