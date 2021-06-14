import React, { ReactElement, RefObject } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { issueFilterTypeState } from 'store/issueInfoStore';
import ModalContentList from './ModalContentList';
interface FilterModalProps {
  modalRef: RefObject<HTMLDivElement>;
}
export default function IssueTableFilterModal({ modalRef }: FilterModalProps): ReactElement {
  const filterType = useRecoilValue(issueFilterTypeState);

  return (
    <IssueTableFilterModalBlock filterType={filterType} ref={modalRef}>
      <div className='modal__header'>{filterType} 선택</div>
      <ModalContentList filterType={filterType} />
    </IssueTableFilterModalBlock>
  );
}

interface StyleProps {
  filterType: string;
}
const IssueTableFilterModalBlock = styled.div<StyleProps>`
  position: absolute;
  top: 50px;
  right: ${({ filterType, theme }) => theme.filterModalPosition[filterType]}px;
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
