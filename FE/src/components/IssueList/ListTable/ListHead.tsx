import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { atoms } from '../../../util/store';

import { Checkbox, Tabs, Tab, Button } from '@material-ui/core';
import { IconAlertCircle, IconArchive } from '../../Common/Icons';
import { TNameValue } from '../../../util/reference';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ListModal, { testData } from '../../Common/ListModal';

interface IListHead {
  headerText: {
    [leftOrRight: string]: TNameValue[];
  };
}

const ListHead = ({ headerText: { left, right }, ...props }: IListHead) => {
  // 1. 일반
  const [leftTabsState, setLeftTabsState] = useState(0);
  const {
    issueList: {
      assigneeModalVisible, labelModalVisible,
      milestoneModalVisible, writerModalVisible,
    }
  } = atoms;

  const [isAssigneeModalVisible, setIsAssigneeModalVisible] = useRecoilState(assigneeModalVisible);
  const [isLabelModalVisible, setIsLabelModalVisible] = useRecoilState(labelModalVisible);
  const [isMilestoneModalVisible, setIsMilestoneModalVisible] = useRecoilState(milestoneModalVisible);
  const [isWriterModalVisible, setIsWriterModalVisible] = useRecoilState(writerModalVisible);

  const arrRightTexts = right.map(({ name, value }, i) => {
    let modalState : boolean = false;
    let handleRightButtonClick;

    switch (name) {
      case 'assignee':
        modalState = isAssigneeModalVisible;
        handleRightButtonClick = () =>
          setIsAssigneeModalVisible(!isAssigneeModalVisible);
        break;
      case 'label':
        modalState = isLabelModalVisible;
        handleRightButtonClick = () =>
          setIsLabelModalVisible(!isLabelModalVisible);
        break;
      case 'milestone':
        modalState = isMilestoneModalVisible;
        handleRightButtonClick = () =>
          setIsMilestoneModalVisible(!isMilestoneModalVisible);
        break;
      case 'writer':
        modalState = isWriterModalVisible;
        handleRightButtonClick = () =>
          setIsWriterModalVisible(!isWriterModalVisible);
        break;
      default:
        break;
    }
    return { name, value, modalState, handleRightButtonClick };
  });

  // 2. events
  const handleLeftTabsState = (e: React.ChangeEvent<{}>, value: number) => setLeftTabsState(value);
  const handleHideAllModals = () => {
    isAssigneeModalVisible && setIsAssigneeModalVisible(false);
    isLabelModalVisible && setIsLabelModalVisible(false);
    isMilestoneModalVisible && setIsMilestoneModalVisible(false);
    isWriterModalVisible && setIsWriterModalVisible(false);
  };

  // 3-1. render
  const renderLeftTabItems = () =>
    left.map(({ name, value: label }, idx) => (
      <LeftTab
        key={idx}
        label={
          <IconBlock>
            {name === 'open' ? <IconAlertCircle /> : <IconArchive />}
            {label}
            {'(3)'}
          </IconBlock>
        }
      />
    ));
  
  // 3-2. render (already rendered)
    // rightButtonItems는 함수 형식으로 render하면 recoil 관련값들이 전부 작동안함..
  const rightButtonItems = arrRightTexts.map(
    ({ name, value, modalState, handleRightButtonClick }, idx) => (
      <RightLayout key={idx}>
        <RightRow>
          <RightButton
            name={name}
            onClick={() => {
              handleHideAllModals();
              handleRightButtonClick && handleRightButtonClick();
            }}
          >
            <span>{value}</span>
            <MdKeyboardArrowDown />
          </RightButton>
        </RightRow>
        <RightRow>
          <ListModal
            rightPos="0"
            isModalVisible={modalState}
            data={{
              title: '테스트',
              items: testData,
            }}
          />
        </RightRow>
      </RightLayout>
    ),
  );
  // ====

  return (
    <ListHeadLayout {...props}>
      {/* 좌측 */}
      <ListHeadRow>
        {/* 아이템 중 하나라도 선택되어있을때 indeterminate checked 모두 true */}
        {/* 아이템 모두 선택되어 있을때 checked만 true */}
        {/* 아이템 선택X --> 모두 false */}
        <Checkbox color="primary" indeterminate checked />
        <LeftTabs value={leftTabsState} onChange={handleLeftTabsState}>
          {renderLeftTabItems()}
        </LeftTabs>
      </ListHeadRow>

      {/* 우측 */}
      <ListHeadRow>{rightButtonItems}</ListHeadRow>
    </ListHeadLayout>
  );
};
export default ListHead;

// --- Styled Components ---

// 1. 메인 (큰 틀)
const ListHeadLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;

  background-color: ${({ theme }) => theme.colors.grayScale.bgColor};
  border-radius: 0.5rem 0.5rem 0px 0px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grayScale.line}`};
  padding: 1.05rem 0;
`;

const ListHeadRow = styled.div`
  display: flex;
  align-items: center;
`;
// =====

// 2. 일반
const IconBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

// 2-1) RightButton(필터) 전용 Wrapper
const RightLayout = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4px;
`;

const RightRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;
// =====

// 3. Material-UI 커스터마이징
const cssMuiTabStyle = css`
  min-height: 2.4rem;
  height: 2.4rem;
  min-width: 3.2rem;
`;

const LeftTabs = styled(Tabs)`
  ${cssMuiTabStyle};

  .MuiTabs-indicator {
    background-color: transparent;
  }
  .Mui-selected {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const LeftTab = styled(Tab)`
  ${cssMuiTabStyle};
`;

const RightButton = styled(Button)`
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.grayScale.label};

  span {
    margin-right: 0.4rem;
  }
`;
