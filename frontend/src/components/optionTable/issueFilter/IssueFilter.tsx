import useToggle from 'hooks/useToggle';
import React, { ReactElement, useRef } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IssueFilterModal from './IssueFilterModal';
import SearchInput from './SearchInput';
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
          <ExpandMoreIcon />
        </div>
        <SearchInput />
      </IssueFilterBlock>
      {open && <IssueFilterModal modalRef={filterModal} />}
    </>
  );
}

const IssueFilterBlock = styled.div`
  display: flex;
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
