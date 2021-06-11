import styled from 'styled-components';
import { useState } from 'react';
import { Checkbox, Tabs, Tab, makeStyles, Button } from '@material-ui/core';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { TextIssueList } from '../../util/reference';
import { IconAlertCircle, IconArchive } from '../Common/Icons';

interface IIssueTableRow {
  type: 'thead' | 'tbody';
}

const useIssueTableStyles = makeStyles({
  tabsRoot: {
    minHeight: '24px',
    height: '24px',
    minWidth: '32px',
  },
  tabRoot: {
    minHeight: '24px',
    height: '24px',
    minWidth: '32px',
  },
});

const IssueTable = ({ ...props }) => {
  const {
    table: {
      header: { left, right },
    },
  } = TextIssueList;

  const classes = useIssueTableStyles();
  const [issueState, setIssueState] = useState(0);

  const handleIssueState = (e: React.ChangeEvent<{}>, value: number) =>
    setIssueState(value);

  return (
    <IssueTableLayout>
      <IssueTableRow type="thead">
        <IssueTableBlock>
          {/* 아이템 중 하나라도 선택되어있을때 indeterminate checked 모두 true */}
          {/* 아이템 모두 선택되어 있을때 checked만 true */}
          {/* 아이템 선택X --> 모두 false */}

          {/* 좌측 */}
          <div className="item">
            <Checkbox color="primary" indeterminate checked />
            <Tabs
              classes={{ root: classes.tabsRoot }}
              value={issueState}
              onChange={handleIssueState}
              TabIndicatorProps={{
                style: { backgroundColor: 'transparent' },
              }}
            >
              {left.map(({ name, value: label }) => (
                <IssueTab
                  label={
                    <IssueIcon>
                      {name === 'open' ? <IconAlertCircle /> : <IconArchive />}
                      {label}{"(3)"}
                    </IssueIcon>
                  }
                  classes={{
                    root: classes.tabRoot,
                  }}
                />
              ))}
            </Tabs>
          </div>
          {/* 우측 */}
          <div className="item">
            {right.map(({ name, value }) => (
              <IssueButton name={name}>
                <span>{value}</span>
                <MdKeyboardArrowDown />
              </IssueButton>
            ))}
          </div>
        </IssueTableBlock>
      </IssueTableRow>

      <IssueTableRow type="tbody">
        <IssueTableBlock>
          <div className="item">
            <Checkbox color="primary" />
            <div className="item__body">
              <div className="item__body--title">
                <span className="icon">
                  <IconAlertCircle />
                </span>
                <span className="subject">이슈 제목</span>
                <span className="label">레이블 이름</span>
              </div>
              <div className="item__body--info">
                <span>#이슈번호 </span>
                <span>작성자 및 타임스탬프 정보</span>
                <span>마일스톤</span>
              </div>
            </div>
          </div>

          <div className="item__icon">
            <IconAlertCircle />
            <IconAlertCircle />
            <IconAlertCircle />
          </div>
        </IssueTableBlock>
      </IssueTableRow>
    </IssueTableLayout>
  );
};
export default IssueTable;

// --- Styled Components ---
const FlexLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

// Layout / Block  / Row 모두 Div
const IssueTableLayout = styled(FlexLayout)`
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  border-radius: 16px;
`;

const IssueTableBlock = styled(FlexLayout)`
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.line};

  .item {
    display: flex;
    align-items: center;
  }

  .item__body {
    display: flex;
    row-gap: 8px;

    flex-direction: column;
    padding: 0 12px;

    .item__body--title {
      span {
        &.icon {
          color: ${({ theme }) => theme.colors.normal.blue};
        }
        &.subject {
          font-size: ${({ theme }) => theme.fontSize.M};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
        &.label {
          font-size: ${({ theme }) => theme.fontSize.XS};
          background-color: ${({ theme }) => theme.colors.normal.blue};
          border-radius: 30px;
          padding: 4px 16px;
        }
      }
    }

    .item__body--info {
      span {
        font-size: ${({ theme }) => theme.fontSize.XS};
        color: ${({ theme }) => theme.colors.grayScale.label};
      }
    }

    span + span {
      margin-left: 8px;
    }
  }

  .item__icon {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 8px;
  }
`;

const IssueTableRow = styled(FlexLayout)<IIssueTableRow>`
  background-color: ${({ theme, type }) =>
    type === 'thead'
      ? theme.colors.grayScale.bgColor
      : theme.colors.grayScale.offWhite};

  border-radius: ${({ type }) =>
    type === 'thead' ? '16px 16px 0px 0px' : '0px 0px 16px 16px'};

  border-bottom: ${({ type, theme }) =>
    type === 'thead' ? `1px solid ${theme.colors.grayScale.line}` : 'none'};

  ${IssueTableBlock} {
    padding: ${({ type }) => (type === 'thead' ? '12px 0' : '12px 0')};
    align-items: ${({ type }) => (type === 'thead' ? 'center' : 'flex-start')};
    :last-child {
      border-bottom: none;
    }
  }
`;

// Issue Tab
const IssueTab = styled(Tab)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const IssueIcon = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const IssueButton = styled(Button)`
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.grayScale.label};

  span {
    margin-right: 4px;
  }
`;
