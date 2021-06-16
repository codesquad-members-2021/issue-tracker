import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LabelSelectItem from 'components/common/tabModal/LabelSelectItem';
import MilestoneSelectItem from 'components/common/tabModal/MilestoneSelectItem';
import UserSelectItem from 'components/common/tabModal/UserSelectItem';
import { getTabInfoState } from 'store/issueInfoStore';
import { useRecoilValue } from 'recoil';
import { UserType, LabelType, MilestoneType } from 'components/common/tabModal/tapDataType';
interface ModalContentListProps {
  filterType: string;
  setModalClose?: () => void;
}

export default function ModalContentList({
  filterType,
  setModalClose,
}: ModalContentListProps): ReactElement {
  let contentList;

  const tabInfo = useRecoilValue(getTabInfoState);
  if (filterType === 'author' || filterType === 'assignee') {
    const tabInfoKey = filterType === 'author' ? 'assignee' : filterType;
    const userData: Array<UserType> = tabInfo[tabInfoKey];
    contentList = userData.map((assignee) => (
      <UserSelectItem
        key={assignee.id}
        imageURL={assignee.image}
        name={assignee.userName}
      ></UserSelectItem>
    ));
  }
  if (filterType === 'label') {
    const labelData: Array<LabelType> = tabInfo[filterType];
    contentList = labelData.map((label) => <LabelSelectItem key={label.id} label={label} />);
  }

  if (filterType === 'milestone') {
    const milestoneData: Array<MilestoneType> = tabInfo[filterType];
    contentList = milestoneData.map((milestone) => (
      <MilestoneSelectItem key={milestone.id} title={milestone.title} />
    ));
  }

  return <ModalContentListBlock>{contentList}</ModalContentListBlock>;
}

const ModalContentListBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.lineGrey};
  }
`;

export const assignees = [
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/63284310?v=4',
    userName: 'eNoLJ',
    assigned: false,
  },
  {
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/68000537?v=4',
    userName: 'janeljs',
    assigned: false,
  },
  {
    id: 3,
    image: 'https://avatars.githubusercontent.com/u/68000537?v=4',
    userName: 'zane',
    assigned: false,
  },
  {
    id: 4,
    image: 'https://avatars.githubusercontent.com/u/74946802?v=4',
    userName: 'torch-ray',
    assigned: false,
  },
];
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
