import React, { ReactElement, useRef } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { issueFilterTypeState } from 'store/issueInfoStore';
import useToggle from 'hooks/useToggle';
import TabModal from 'components/common/tabModal/TabModal';

interface Props {}

interface filterObjType {
  key: string;
  name: string;
}

export default function IssueDetailOption({}: Props): ReactElement {
  const setFilterType = useSetRecoilState(issueFilterTypeState);

  const assigneeToggle = useRef<HTMLDivElement>(null);
  const labelToggle = useRef<HTMLDivElement>(null);
  const milestoneToggle = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const tabOptions = [
    { key: 'assignee', name: '담당자', ref: assigneeToggle },
    { key: 'label', name: '레이블', ref: labelToggle },
    { key: 'milestone', name: '마일스톤', ref: milestoneToggle },
  ];

  const { open } = useToggle({
    toggle: [assigneeToggle, labelToggle, milestoneToggle],
    modal: modalRef,
  });

  const handleClick = ({ key, name }: filterObjType) => {
    setFilterType({ key, name, isMainPage: false });
  };

  const tabOptionList = tabOptions.map(({ key, name, ref }) => (
    <div key={key} ref={ref} onClick={() => handleClick({ key, name })}>
      <div>{name}</div>
      <AddOutlinedIcon />
    </div>
  ));

  return (
    <>
      <IssueDetailOptionBlock>{tabOptionList}</IssueDetailOptionBlock>
      {open && <TabModal modalRef={modalRef} />}
    </>
  );
}

const IssueDetailOptionBlock = styled.div`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  over-flow: hidden;
  height: min-content;
  > div {
    padding: 34px 32px;
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.lineGrey};
    }
  }
`;
