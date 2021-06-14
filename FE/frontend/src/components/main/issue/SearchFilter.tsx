import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import Modal from '../../../styles/molcules/Modal';

const SearchFilter = () => {
  const mainFilterOptions = [
    '열린 이슈',
    '내가 작성한 이슈',
    '나에게 할당된 이슈',
    '내가 댓글을 남긴 이슈',
    '닫힌 이슈',
  ];

  return (
    <>
      <FilterWrapper>
        <Modal
          label="필터"
          options={mainFilterOptions}
          exceptedDiv="filterTitle"
          type="text"
          innerTitle="이슈 필터"
        />
        <Search />
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </FilterWrapper>
    </>
  );
};

const FilterWrapper = styled.div`
  position: relative;
  width: 601px;
  height: 40px;
  display: flex;
  align-items: center;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 11px;
  input:focus {
    outline: none;
  }
`;

const Search = styled.input`
  width: 472px;
  height: 38px;
  background: ${props => props.theme.greyscale.inputBackgound};
  border-radius: 0px 11px 11px 0px;
  padding-left: 40px;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 140px;
  top: 10px;
  svg {
    stroke: ${props => props.theme.greyscale.placeholer};
  }
`;

export default SearchFilter;
