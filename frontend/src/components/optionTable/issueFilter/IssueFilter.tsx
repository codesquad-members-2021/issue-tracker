import useToggle from 'hooks/useToggle';
import React, { ReactElement, useRef } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IssueFilterModal from './IssueFilterModal';
import SearchIcon from '@material-ui/icons/Search';
interface Props {}

export default function IssueFilter({}: Props): ReactElement {
  const filterButton = useRef<HTMLDivElement>(null);
  const filterModal = useRef<HTMLDivElement>(null);
  const { open } = useToggle({ toggle: [filterButton], modal: filterModal });

  return (
    <>
      <IssueFilterBlock>
        <div className='filter__btn' ref={filterButton}>
          <div>필터</div>
          <div>
            <ExpandMoreIcon />
          </div>
        </div>
        {/* <SearchInput>
          <SearchIcon />
          <Input value='is:issue is:open'></Input>
        </SearchInput> */}
      </IssueFilterBlock>
      {open && <IssueFilterModal modalRef={filterModal} />}
    </>
  );
}

const IssueFilterBlock = styled.div`
  .filter__btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 72px;
    width: 128px;
    height: 40px;
    background: ${({ theme }) => theme.color.bgGrey};
    border-radius: 11px 0px 0px 11px;
    border-right: 1px solid ${({ theme }) => theme.color.lineGrey};
  }
`;

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
