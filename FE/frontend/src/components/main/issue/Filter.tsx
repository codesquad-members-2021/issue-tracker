import React, { useState } from 'react';
import styled from 'styled-components';
import Typo from '../../../styles/atoms/Typos';
import { ReactComponent as DownwardIcon } from '../../../icons/downward.svg';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import DropDown from './DropDown';

const Filter = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [options, setOptions] = useState([
    { name: '열린 이슈', isSelected: false },
    { name: '내가 작성한 이슈', isSelected: false },
    { name: '나에게 할당된 이슈', isSelected: false },
    { name: '내가 댓글을 남긴 이슈', isSelected: false },
    { name: '닫힌 이슈', isSelected: false },
  ]);

  const toggle = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <FilterWrapper>
        <Button onClick={toggle}>
          <Text link small>
            필터
          </Text>
          <DownwardIcon />
        </Button>

        <Search />
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </FilterWrapper>
      {isShown && (
        <DropDownWrapper>
          <DropDown
            isShown={isShown}
            toggle={toggle}
            exceptedDiv="filterTitle"
            options={options}
            setOptions={setOptions}
            type="text"
            title="이슈 필터"
          />
        </DropDownWrapper>
      )}
    </>
  );
};

const FilterWrapper = styled.div`
  position: relative;
  width: 601px;
  height: 40px;
  display: flex;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 11px;
  input:focus {
    outline: none;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 128px;
  background: ${props => props.theme.greyscale.background};
  border-radius: 11px 0px 0px 11px;
  cursor: pointer;
  //not working
  &:hover span {
    color: ${props => props.theme.greyscale.offWhite};
  }
`;

const Text = styled(Typo)`
  color: ${props => props.theme.greyscale.label};
`;

const Search = styled.input`
  width: 472px;
  background: ${props => props.theme.greyscale.inputBackgound};
  border-radius: 0px 11px 11px 0px;
  border: 0;
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

const DropDownWrapper = styled.div`
  position: absolute;
  top: 160px;
`;

export default Filter;
