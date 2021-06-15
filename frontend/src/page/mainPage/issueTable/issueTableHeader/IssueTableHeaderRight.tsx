import React, { ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';
import List from 'components/atom/List';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useToggle from 'hooks/useToggle';
import { useSetRecoilState } from 'recoil';
import { issueFilterTypeState } from 'store/issueInfoStore';
import IssueTableFilterModal from './issueTableFilterModal/IssueTableFilterModal';
interface Props {}

export default function IssueListHeaderRight({}: Props): ReactElement {
  const setFilterType = useSetRecoilState(issueFilterTypeState);

  const assigneeToggle = useRef<HTMLDivElement>(null);
  const labelToggle = useRef<HTMLDivElement>(null);
  const milestoneToggle = useRef<HTMLDivElement>(null);
  const authorToggle = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const filterStandards = [
    { key: 'assignee', name: '담당자', ref: assigneeToggle },
    { key: 'label', name: '레이블', ref: labelToggle },
    { key: 'milestone', name: '마일스톤', ref: milestoneToggle },
    { key: 'author', name: '작성자', ref: authorToggle },
  ];
  const { open } = useToggle({
    toggle: [assigneeToggle, labelToggle, milestoneToggle, authorToggle],
    modal: modalRef,
  });

  const handleClick = (filterType: string): void => {
    setFilterType(filterType);
  };
  return (
    <>
      <IssueListHeaderRightBlock>
        {filterStandards.map((standard, idx) => (
          <div ref={standard.ref} key={idx} onClick={() => handleClick(standard.key)}>
            {standard.name}
            <ExpandMoreIcon />
          </div>
        ))}
      </IssueListHeaderRightBlock>
      {open && <IssueTableFilterModal modalRef={modalRef} />}
    </>
  );
}

const IssueListHeaderRightBlock = styled.div`
  display: flex;
  div {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;
