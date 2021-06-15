import React, { ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';
import List from 'components/atom/List';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useToggle from 'hooks/useToggle';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { issueFilterTypeState, getTabInfoState } from 'store/issueInfoStore';
import TabModal from 'components/common/tabModal/TabModal';

interface Props {}
interface filterObjType {
  key: string;
  name: string;
}
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

  const handleClick = ({ key, name }: filterObjType): void => {
    setFilterType({ key, name, isMainPage: true });
  };

  const filterStandardList = filterStandards.map(({ key, name, ref }, idx) => (
    <div ref={ref} key={idx} onClick={() => handleClick({ key, name })}>
      {name}
      <ExpandMoreIcon />
    </div>
  ));
  return (
    <>
      <IssueListHeaderRightBlock>{filterStandardList}</IssueListHeaderRightBlock>
      {open && <TabModal modalRef={modalRef} />}
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
