import React, { useState, useRef, RefObject } from 'react';
import styled from 'styled-components';
import RadioBtn from 'components/atom/RadioBtn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import useToggle from 'hooks/useToggle';
function IssueFilterSection() {
  const filterButton = useRef<HTMLDivElement>(null);
  const filterModal = useRef<HTMLDivElement>(null);
  const open = useToggle({ toggle: [filterButton], modal: filterModal, init: false });

  return (
    <>
      <FilterSectionBlock>
        <FilterBtn ref={filterButton}>
          <div>필터</div>
          <div>
            <ExpandMoreIcon />
          </div>
        </FilterBtn>
        <SearchInput>
          <SearchIcon />
          <Input value='is:issue is:open'></Input>
        </SearchInput>
      </FilterSectionBlock>
      {open && <IssueFilterModal modal={filterModal} />}
    </>
  );
}
interface ModalProps {
  modal: RefObject<HTMLDivElement>;
}

function IssueFilterModal({ modal }: ModalProps) {
  const filterLists = [
    '열린 이슈',
    '내가 작성한 이슈',
    '나에게 할당된 이슈',
    '내가 댓글을 남긴 이슈',
    '닫힌 이슈',
  ];
  const asyncFilter = {
    0: '해당셀렉터로 연결되게..',
  };
  const handleFilterClick = (idx: number) => {
    console.log(idx);
  };
  return (
    <ListBlock ref={modal}>
      <ListHead>이슈 필터</ListHead>
      {filterLists.map((list, idx) => (
        <ListBody key={'filter' + idx} onClick={() => handleFilterClick(idx)}>
          <div>{list}</div>
          <RadioBtn />
        </ListBody>
      ))}
    </ListBlock>
  );
}

const SearchInput = styled.div`
  padding: 0px 10px;
  display: flex;
  min-width: 372px;
  width: fit-content;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.inputBg};
  border-radius: 0px 11px 11px 0px;
`;
const Input = styled.input`
  min-width: 300px;
  width: 450px;
  height: 40px;
  border: none;
  background-color: ${({ theme }) => theme.color.transparent};
  &:focus {
    outline: none;
  }
`;
const FilterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 72px;
  width: 128px;
  height: 40px;
  background: ${({ theme }) => theme.color.bgGrey};
  border-radius: 11px 0px 0px 11px;
  border-right: 1px solid ${({ theme }) => theme.color.lineGrey};
`;
const FilterSectionBlock = styled.div`
  display: flex;
  align-item: center;
  justify-contents: space-between;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 11px;
  height: 40px;
`;
const ListBlock = styled.div`
  position: absolute;
  top: 190px;
  z-index: 9999;
  background-color: ${({ theme }) => theme.color.white};
  width: 240px;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 16px;
    div:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.lineGrey};
    }
}`;
const ListHead = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.bgGrey};
  border: ${({ theme }) => theme.color.bgGrey};
  border-bottom: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 16px 16px 0 0;
}`;
const ListBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.white};
    &:last-child {
      border-radius: 0 0 16px 16px;
    }
}`;

export default IssueFilterSection;
