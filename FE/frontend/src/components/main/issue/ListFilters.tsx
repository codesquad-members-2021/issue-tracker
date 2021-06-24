import React from 'react';
import styled from 'styled-components';
import AssigneeFilter from './AssigneeFilter';

const ListFilters = () => {
  // const { data: issueData } = useFetch('issue', 'getAllData');
  // const { data: labelData } = useFetch('label', 'getAllData');
  // const { data: milestoneData } = useFetch('milestone', 'getAllData');

  const labels = new Set(['레이블이 없는 이슈']);
  const milestones = new Set(['마일스톤이 없는 이슈']);
  const author = new Set(['작성자가 없는 이슈']);

  // useEffect(() => {

  // }, [issueData, labelData, milestoneData]);

  return (
    <FilterContainer className="whew">
      <AssigneeFilter />
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
