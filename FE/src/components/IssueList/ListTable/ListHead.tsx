import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { filterVisibleAtom, TFilterVisibleAtomTypes } from 'util/store';

import { IIssueListChildren } from '..';
import { Checkbox, Tabs, Tab, Button } from '@material-ui/core';
import { IconAlertCircle, IconArchive } from '../../Common/Icons';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ListModal from '../../Common/ListModal';
import { TextIssueList, TextIssueListFilterMock } from 'util/reference';

const ListHead = ({ data, handleFilterModalClick, ...props }: IIssueListChildren) => {
  // 1. 일반 (Recoil 등)
  const { table: {header: {left, right}} } = TextIssueList;
  const [leftTabsState, setLeftTabsState] = useState(0);
  const [filterVisibleState, setFilterVisibleState] = useRecoilState(filterVisibleAtom);

  const [issueOpenOrClose, setIssueOpenOrClose] = useState({open: 0, close: 0});

  // 2. useEffect
  useEffect(() => {
    if (!data || !data.issues) return;
    const arrIssues = data.issues.issues;
    const openCnt = arrIssues.reduce((result, issue) => (result += Number(issue.isOpen)), 0);
    setIssueOpenOrClose({
      ...issueOpenOrClose,
      open: openCnt,
      close: arrIssues.length-openCnt,
    })

  },[data?.issues]);

  // 3. events
  const handleLeftTabsState = (e: React.ChangeEvent<{}>, value: number) => setLeftTabsState(value);
  const handleRightBtnsClick = (name : TFilterVisibleAtomTypes) => {
    setFilterVisibleState((filterVisibleState) => ({
      ...filterVisibleState,
      assignee: false,
      label: false,
      milestone: false,
      search: false,
      writer: false,
    }));
    handleFilterModalClick(name);
  }

  // 4-1. render
  const renderLeftTabItems = () =>
    left.map(({ name, value: label }, idx) => (
      <LeftTab
        key={idx}
        label={
          <IconBlock>
            {name === 'open' ? <IconAlertCircle /> : <IconArchive />}
            {label}
            ({name === 'open' ? issueOpenOrClose.open : issueOpenOrClose.close})
          </IconBlock>
        }
      />
    ));
  // 4-2. render (already rendered)
    // rightButtonItems는 함수 형식으로 render하면 recoil 관련값들이 전부 작동안함..
  const rightButtonItems = right.map(
    ({ name, value }, idx) => (
      <RightLayout key={idx}>
        <RightRow>
          <RightButton
            id="modalBtn"
            name={name}
            onClick={() => handleRightBtnsClick(name)}
          >
            <span>{value}</span>
            <MdKeyboardArrowDown />
          </RightButton>
        </RightRow>
        {filterVisibleState[name] && (
          <RightRow>
            <ListModal
              rightPos="0"
              data={TextIssueListFilterMock[name]}
            />
          </RightRow>
        )}
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
  padding: 0.75rem 0;
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
