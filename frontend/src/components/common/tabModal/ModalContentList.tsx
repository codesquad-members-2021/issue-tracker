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
