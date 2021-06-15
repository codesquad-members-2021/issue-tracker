import styled, { css } from 'styled-components';
import { useCallback, useState } from 'react';
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
  const [issueState, setIssueState] = useState(0);

  const handleIssueState = (e: React.ChangeEvent<{}>, value: number) =>
    setIssueState(value);

  const renderLeftTabItems = useCallback(
    () =>
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
      )),
    [
      left /* 추후 이슈 추가가 되면 Count가 증가하니까.. 관련 Count State 넣어주기 */,
    ],
  );

  const renderRightButtonItems = useCallback(
    () =>
      right.map(({ name, value }, idx) => (
        <RightLayout key={idx}>
          <RightRow>
            <RightButton  name={name}>
              <span>{value}</span>
              <MdKeyboardArrowDown />
            </RightButton>
          </RightRow>
          <RightRow>
            <ListModal
              rightPos="0"
              modalType={name}
              isModalVisible={true}
              data={{
                title: '테스트',
                items: testData,
              }}
            />
          </RightRow>
        </RightLayout>
      )),
    [right],
  );

  return (
    <ListHeadLayout {...props}>
      {/* 좌측 */}
      <ListHeadRow>
        {/* 아이템 중 하나라도 선택되어있을때 indeterminate checked 모두 true */}
        {/* 아이템 모두 선택되어 있을때 checked만 true */}
        {/* 아이템 선택X --> 모두 false */}
        <Checkbox color="primary" indeterminate checked />
        <LeftTabs value={issueState} onChange={handleIssueState}>
          {renderLeftTabItems()}
        </LeftTabs>
      </ListHeadRow>

      {/* 우측 */}
      <ListHeadRow>{renderRightButtonItems()}</ListHeadRow>
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
