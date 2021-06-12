import React, { ReactElement } from 'react';
import styled from 'styled-components';
interface ModalContentListProps {
  filterType: string;
  setModalClose: () => void;
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
  }
  if (filterType === 'milestone') {
  }

  return <ModalContentListBlock>{contentList}</ModalContentListBlock>;
}

const ModalContentListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;
