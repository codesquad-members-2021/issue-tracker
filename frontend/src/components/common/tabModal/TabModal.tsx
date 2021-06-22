import React, { ReactElement, RefObject } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { issueFilterTypeState } from 'store/issueInfoStore';
import ModalContentList from './ModalContentList';
interface TabModalProps {
  modalRef: RefObject<HTMLDivElement>;
}
interface filterObjType {
  key: string;
  name: string;
  isMainPage: boolean;
}
export default function TabModal({ modalRef }: TabModalProps): ReactElement {
  const filterType = useRecoilValue<filterObjType>(issueFilterTypeState);

  return (
    <TabModalBlock filterType={filterType.key} ref={modalRef} isMainPage={filterType.isMainPage}>
      <div className='modal__header'>{filterType.name} 선택</div>
      <ModalContentList filterType={filterType.key} />
    </TabModalBlock>
  );
}

interface StyleProps {
  filterType: string;
  isMainPage: boolean;
}
const TabModalBlock = styled.div<StyleProps>`
  position: absolute;
  top: ${({ theme, filterType, isMainPage }) => (isMainPage ? '50px' : '6%')};
  right: ${({ filterType, theme, isMainPage }) =>
    isMainPage ? `${theme.tabModalRightPosition[filterType]}px` : '19.4%'};
  width: 240px;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  .modal__header {
    background-color: ${({ theme }) => theme.color.bgGrey};
    padding: 8px 40px 8px 16px;
  }
  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.lineGrey};
  }
`;
