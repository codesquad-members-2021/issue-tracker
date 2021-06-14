import React from 'react';
import Modal from '../../../styles/molcules/Modal';

const ListFilters = () => {
  const optionArr = ['이슈 1', '이슈 2'];

  return (
    <>
      <Modal
        label="필터"
        options={optionArr}
        exceptedDiv="filterTitle"
        type="text"
        innerTitle="이슈 필터"
      />
    </>
  );
};

export default ListFilters;
