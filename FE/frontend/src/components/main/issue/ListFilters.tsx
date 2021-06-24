import React, { useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../../../util/useFetch';
import AssigneeFilter from './AssigneeFilter';
import LabelFilter from './LabelFilter';
import MilestoneFilter from './MilestoneFilter';
import AuthorFilter from './AuthorFilter';

const ListFilters = () => {
  const { data } = useFetch('issue', 'getAllData');

  const assignees = data
    ?.flatMap(({ assignees }: any) => {
      return assignees;
    })
    ?.filter(
      (v: any, i: number, a: any) =>
        a.findIndex((t: any) => t.username === v.username) === i
    )
    .map((val: any) => {
      return { id: val.id, optionName: val.username, image: val.profile_image };
    });

  const labels = data
    ?.flatMap(({ labels }: any) => {
      return labels;
    })
    ?.filter(
      (v: any, i: number, a: any) =>
        a.findIndex((t: any) => t.title === v.title) === i
    )
    .map((val: any) => {
      return { id: val.id, optionName: val.title, color: val.color };
    });

  const milestone = data
    ?.map(({ milestone }: any) => {
      return milestone;
    })
    ?.filter(
      (v: any, i: number, a: any) =>
        a?.findIndex((t: any) => t?.title === v?.title) === i
    )
    ?.map((val: any) => {
      return { id: val?.id, optionName: val?.title };
    });

  const author = data
    ?.map(({ writer }: any) => {
      return writer;
    })
    .filter(
      (v: any, i: number, a: any) =>
        a.findIndex((t: any) => t.username === v.username) === i
    )
    .map((val: any) => {
      return { id: val.id, optionName: val.username, image: val.profile_image };
    });

  return (
    <FilterContainer>
      {assignees && <AssigneeFilter filteredAssignee={assignees} />}
      {labels && <LabelFilter filteredLabels={labels} />}
      {milestone && <MilestoneFilter filteredMilestone={milestone} />}
      {author && <AuthorFilter filteredAuthor={author} />}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
`;

export default ListFilters;
