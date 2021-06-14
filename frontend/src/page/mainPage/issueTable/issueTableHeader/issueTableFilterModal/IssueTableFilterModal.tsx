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
    <IssueTableFilterModalBlock ref={modalRef}>
      <div className='modal__header'>{filterType} 선택</div>
      <ModalContentList filterType={filterType}/>
    </IssueTableFilterModalBlock>
  );
}

const IssueTableFilterModalBlock = styled.div`
  position: absolute;
  top: 190px;
  right: 171px;
  width: 240px;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 16px;
  overflow: hidden;
  .modal__header { padding: 8px 40px 8px 16px; }
`;
