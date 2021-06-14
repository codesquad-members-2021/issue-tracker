import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LabelSelectItem from 'components/common/LabelSelectItem';
import MilestoneSelectItem from 'components/common/MilestoneSelectItem';

interface ModalContentListProps {
  filterType: string;
  setModalClose?: () => void;
}

export default function ModalContentList({
  filterType,
  setModalClose,
}: ModalContentListProps): ReactElement {
  let contentList;

  if (filterType === 'author') {
  }
  if (filterType === 'label') {
    contentList = labelSample.map((label) => <LabelSelectItem key={label.id} label={label} />);
  }
  if (filterType === 'assignee') {
  }
  if (filterType === 'milestone') {
    contentList = milestoneSample.map((milestone) => (
      <MilestoneSelectItem key={milestone.id} title={milestone.title} />
    ));
  }

  return <ModalContentListBlock>{contentList}</ModalContentListBlock>;
}

const ModalContentListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
`;

const labelSample = [
  {
    id: 1,
    name: 'document',
    colorCode: '#FFADD2',
    description: 'new document',
  },
  {
    id: 2,
    name: 'enhancement',
    colorCode: '#44198a',
    description: 'new feature',
  },
];

const milestoneSample = [
  {
    id: 1,
    title: '마일스톤 제목',
    description: '레이블에 대한 설명',
    createdDateTime: '2021-05-15 15:55:20',
    openedIssues: 3,
    closedIssues: 1,
  },
  {
    id: 2,
    title: '마일스톤 제목',
    description: '레이블에 대한 설명',
    createdDateTime: '2021-05-15 15:55:20',
    openedIssues: 3,
    closedIssues: 1,
  },
];
