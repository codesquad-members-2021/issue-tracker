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
    .filter(
      (v: any, i: number, a: any) =>
        a.findIndex((t: any) => t.username === v.username) === i
    )
    .map((val: any) => {
      return { optionName: val.username, image: val.profile_image };
    });

  const labels = data
    ?.flatMap(({ labels }: any) => {
      return labels;
    })
    .filter(
      (v: any, i: number, a: any) =>
        a.findIndex((t: any) => t.title === v.title) === i
    )
    .map((val: any) => {
      return { optionName: val.title, color: val.color };
    });

  const milestone = data
    ?.map(({ milestone }: any) => {
      return milestone;
    })
    .filter(
      (v: any, i: number, a: any) =>
        a.findIndex((t: any) => t.title === v.title) === i
    )
    .map((val: any) => {
      return { optionName: val.title };
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
      return { optionName: val.username, image: val.profile_image };
    });

  return (
    <FilterContainer>
      {assignees && <AssigneeFilter filteredAssignee={assignees} />}
      {labels && <LabelFilter filteredLabels={labels} />}
      {milestone && <MilestoneFilter filteredMilestone={milestone} />}
      {author && <AuthorFilter filteredAuthor={author} />}
      {/* <Modal
        label="담당자"
        options={assignees}
        exceptedDiv="filterTitle"
        type="text"
        innerTitle="담당자 필터"
      />
      <Modal
        label="레이블"
        options={labels}
        exceptedDiv="filterTitle"
        type="text"
        innerTitle="레이블 필터"
      />
      <Modal
        label="마일스톤"
        options={milestones}
        exceptedDiv="filterTitle"
        type="text"
        innerTitle="마일스톤 필터"
      />
      <Modal
        label="작성자"
        options={author}
        exceptedDiv="filterTitle"
        type="text"
        innerTitle="작성자 필터"
      /> */}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
`;

export default ListFilters;
