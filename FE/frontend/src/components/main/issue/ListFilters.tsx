import React from 'react';
import styled from 'styled-components';
import Modal from '../../../styles/molcules/Modal';

const ListFilters = () => {
  const assignees = ['담당자가 없는 이슈'];
  const labels = ['레이블이 없는 이슈'];
  const milestones = ['마일스톤이 없는 이슈'];
  const author = ['작성자가 없는 이슈'];

  return (
    <FilterWrapper>
      <Modal
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
      />
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  display: flex;
`;

export default ListFilters;
