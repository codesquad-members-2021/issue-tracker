import React, { useEffect } from 'react'
import ListHeader from '@components/issueList/ListHeader';
import ListItem from '@components/issueList/ListItem';
import { IssueListItemType } from '@components/common/types/APIType';
import { filterRadioButtonListAtom } from '@components/common/atoms/filterAtom';
import API from '@/utils/API';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';
import { pipe, _ } from '@/utils/functionalUtils';
import { useState } from 'react';
import styled from 'styled-components';

type IssueListType = {
  handleClickShowFilterModal: (title: string) => () => void;
}

const IssueList = ({ handleClickShowFilterModal }: IssueListType) => {
  const [issueItems] = useFetch(API.get.issues);
  const { data, loading, error }: AsyncState<any, any> = issueItems;
  const [checkedFilteredState] = useRecoilState(filterRadioButtonListAtom);
  const [filteredData, setFilteredData] = useState<Array<IssueListItemType>>([]);

  useEffect(() => {
    if (!data) return;
    setFilteredData(
      pipe(
        _.filter(getFilteredMainIssues(checkedFilteredState.issue.name)),
        _.filter(getFilteredIssueItems('assignees', checkedFilteredState.manager.info.id)),
        _.filter(getFilteredIssueItems('labels', checkedFilteredState.label.info.id)),
        _.filter(getFilteredIssueItems('milestone', checkedFilteredState.milestone.info.id)),
        _.filter(getFilteredIssueItems('author', checkedFilteredState.writer.info.id))
      )(data)
    )
  }, [checkedFilteredState, data]);

  return (
    <>
      {
        filteredData.length
          ? <>
            <ListHeader issueItems={data} {...{ handleClickShowFilterModal }} />
            {filteredData.map((issueItem: IssueListItemType) => {
              return <ListItem key={issueItem.id} {...{ issueItem }} />
            })}
          </>

          : <>
            {data && <>
              <ListHeader issueItems={data} {...{ handleClickShowFilterModal }} />
              {!loading && <NoMatchingIssueItemWrapper>검색과 일치하는 결과가 없습니다</NoMatchingIssueItemWrapper>}
            </>}
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

const getFilteredMainIssues = (target: any) => (data: any) => {
  switch (target) {
    case '열린 이슈':
      return !data.closed;
    case '내가 작성한 이슈':
      return data; // 현재 로그인한 나인지 확인해야함
    case '나에게 할당된 이슈':
      return data; // assign이 내가 포함되었는지 확인해야함
    case '내가 댓글을 남긴 이슈':
      return data.hasSameAuthorComments;
    case '닫힌 이슈':
      return data.closed;
    default:
      return data;
  }
}


const NoMatchingIssueItemWrapper = styled.div`
  color:#6E7191;
  text-align: center;
`;

export default IssueList;
