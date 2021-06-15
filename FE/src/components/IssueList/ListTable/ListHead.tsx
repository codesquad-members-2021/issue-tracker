import styled, { css } from 'styled-components';
import { useCallback, useState } from 'react';
import { Checkbox, Tabs, Tab, Button } from '@material-ui/core';
import { IconAlertCircle, IconArchive } from '../../Common/Icons';
import { TNameValue } from '../../../util/reference';
import { MdKeyboardArrowDown } from 'react-icons/md';

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
      left.map(({ name, value: label }) => (
        <LeftTab
          label={
            <IconBlock>
              {name === 'open' ? <IconAlertCircle /> : <IconArchive />}
              {label}
              {'(3)'}
            </IconBlock>
          }
        />
      )),
    [left /* 추후 이슈 추가가 되면 Count가 증가하니까.. 관련 Count State 넣어주기 */],
  );

  const renderRightButtons = useCallback(
    () =>
      right.map(({ name, value }) => (
        <RightButton name={name}>
          <span>{value}</span>
          <MdKeyboardArrowDown />
        </RightButton>
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
      <ListHeadRow>{renderRightButtons()}</ListHeadRow>
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
  border-radius: 16px 16px 0px 0px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grayScale.line}`};
  padding: 12px 0;
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
  column-gap: 4px;
`;
// =====

// 3. Material-UI 커스터마이징
const cssMuiTabStyle = css`
  min-height: 24px;
  height: 24px;
  min-width: 32px;
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
    margin-right: 4px;
  }
`;
