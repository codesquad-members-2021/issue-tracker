import React, { ReactElement } from 'react';
import styled from 'styled-components';
import UserSelectItem from 'components/common/UserSelectItem';
export const assignees = [
  {
  id: 1,
  image: "https://avatars.githubusercontent.com/u/63284310?v=4",
  userName: "eNoLJ",
  assigned: false
  },
  {
  id: 2,
  image: "https://avatars.githubusercontent.com/u/68000537?v=4",
  userName: "janeljs",
  assigned: false
  },
  {
  id: 3,
  image: "https://avatars.githubusercontent.com/u/68000537?v=4",
  userName: "zane",
  assigned: false
  },
  {
  id: 4,
  image: "https://avatars.githubusercontent.com/u/74946802?v=4",
  userName: "torch-ray",
  assigned: false
  }
]
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
  }
  if (filterType === 'assignee') {
    contentList=assignees.map((assignee)=>
    <UserSelectItem key={assignee.id} imageURL={assignee.image} name={assignee.userName}></UserSelectItem>)
  
  }
  if (filterType === 'milestone') {
  }

  return <ModalContentListBlock>{contentList}</ModalContentListBlock>;
}

const ModalContentListBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};

`;

