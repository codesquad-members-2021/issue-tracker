import React from 'react';
import styled from 'styled-components';
import Typos from '../../../styles/atoms/Typos';
import Modal from '../../../styles/molcules/Modal';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import { ReactComponent as Downward } from '../../../icons/downward.svg';

const SearchFilter = () => {
  const mainFilterOptions = [
    { optionName: '열린 이슈' },
    { optionName: '내가 작성한 이슈' },
    { optionName: '나에게 할당된 이슈' },
    { optionName: '내가 댓글을 남긴 이슈' },
    { optionName: '닫힌 이슈' },
  ];

  return (
    <>
      <FilterContainer>
        <Modal
          options={mainFilterOptions}
          exceptedDiv="filterTitle"
          type="text"
          innerTitle="이슈 필터">
          <Text link sm>
            필터
            <Downward />
          </Text>
        </Modal>
        <Search />
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </FilterContainer>
    </>
  );
};

const FilterContainer = styled.div`
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

const Text = styled(Typos)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 128px;
  background: ${props => props.theme.greyscale.background};
  border-radius: 11px 0px 0px 11px;
  color: ${props => props.theme.greyscale.label};
  svg {
    margin: 2px 6px 0 6px;
  }
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
