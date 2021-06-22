import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LabelSelectItem from 'components/common/tabModal/LabelSelectItem';
import MilestoneSelectItem from 'components/common/tabModal/MilestoneSelectItem';
import UserSelectItem from 'components/common/tabModal/UserSelectItem';
import { getTabInfoState, selectedTabState } from 'store/issueInfoStore';
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
  const selectedTab = useRecoilValue(selectedTabState);
  const tabInfo = useRecoilValue(getTabInfoState);
  const isSelectedTabItem = (type: string, id: number, selected?: boolean) => {
    if (selected) return true;
    const selectedData = selectedTab[type];
    if (selectedData instanceof Array) {
      for (const data of selectedData) {
        if (data.id === id) return true;
      }
    } else {
      if (selectedData?.id === id) return true;
    }
    return false;
  };

  interface contentListType {
    assignee: (type: string) => JSX.Element[];
    label: (type: string) => JSX.Element[];
    milestone: (type: string) => JSX.Element[];
    [key: string]: any;
  }

  const getContentList: contentListType = {
    assignee: (type: string): JSX.Element[] => {
      const userData: Array<UserType> = tabInfo[type];
      return userData.map((user) => {
        const selected = isSelectedTabItem(type, user.id, user.assigned);
        return <UserSelectItem key={user.id} {...{ user, selected }}></UserSelectItem>;
      });
    },
    label: (type: string): JSX.Element[] => {
      const labelData: Array<LabelType> = tabInfo[type];
      return labelData.map((label) => {
        const selected = isSelectedTabItem(type, label.id, label.checked);
        return <LabelSelectItem key={label.id} {...{ label, selected }} />;
      });
    },
    milestone: (type: string): JSX.Element[] => {
      const milestoneData: Array<MilestoneType> = tabInfo[type];
      return milestoneData.map((milestone) => {
        const selected = isSelectedTabItem(type, milestone.id);
        return <MilestoneSelectItem key={milestone.id} {...{ milestone, selected }} />;
      });
    },
  };

  const type = filterType === 'author' ? 'assignee' : filterType;
  const contentList = getContentList[type](type);
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
