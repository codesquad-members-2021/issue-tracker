import React from 'react'
import styled from 'styled-components'
import AlertCircleIcon from '@/Icons/AlertCircle.svg';
import CloseBoxIcon from '@/Icons/CloseBox.svg';

const CloseOrOpenLabel = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {
        isOpen
          ? <OpenLabelWrapper>
            <img src={AlertCircleIcon} alt="" />
            <ButtonInnerSpan>열린 이슈</ButtonInnerSpan>
          </OpenLabelWrapper >

          : <CloseLabelWrapper>
            <img src={CloseBoxIcon} alt="" />
            <ButtonInnerSpan>열린 이슈</ButtonInnerSpan>
          </CloseLabelWrapper>}
    </>
  )
}

const OpenLabelWrapper = styled.span`
display: inline-flex;
  width: 110px;
  height: 40px;
  padding: 10px 16px;
  margin-right: 8px;
  border:1px solid #007AFF;
  background: #C7EBFF;
  color: #007AFF;
  font-size: 12px;
  border-radius: 30px;
  place-items: center;
`;

const CloseLabelWrapper = styled.span`
display: inline-flex;
  width: 110px;
  height: 40px;
  padding: 10px 16px;
  margin-right: 8px;
  border:1px solid #0025E7;
  background: #CCD4FF;
  color: #0025E7;
  font-size: 12px;
  border-radius: 30px;
  place-items: center;
`;

const ButtonInnerSpan = styled.span`
  margin-left: 5px;
`;
export default CloseOrOpenLabel
