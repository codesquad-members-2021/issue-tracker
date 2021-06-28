import React from 'react';
import styled from 'styled-components';
import useFetch from '../../../util/useFetch';
import Tabs from '../../../styles/molcules/Tabs';
import Buttons from '../../../styles/atoms/Buttons';
import Typos from '../../../styles/atoms/Typos';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { ReactComponent as Calendar } from '../../../icons/calendar.svg';
import { ReactComponent as MilestoneIcon } from '../../../icons/milestone.svg';
import { ReactComponent as Archive } from '../../../icons/archive.svg';
import { ReactComponent as Edit } from '../../../icons/edit.svg';
import { ReactComponent as Trash } from '../../../icons/trash.svg';

const MilestoneList = () => {
  const { isLoading, data, error } = useFetch('milestone', 'getAllData');

  return (
    <MilestoneListContainer>
      <MilstoneTab>
        <Tabs />
        <Buttons initial small>
          <IconWrapper>
            <Plus />
          </IconWrapper>
          추가
        </Buttons>
      </MilstoneTab>
      <MilestoneTableContainer>
        <MilestoneHeader>
          <MilestoneContainer link sm>
            <MilestoneIcon />
            열린 마일스톤
          </MilestoneContainer>
          <MilestoneContainer link sm>
            <Archive />
            닫힌 마일스톤
          </MilestoneContainer>
        </MilestoneHeader>
        <TableContainer>
          {data?.map((milestone: any, index: number) => {
            const progressPercentage = `${~~(
              (milestone.closed_issue /
                (milestone.closed_issue + milestone.open_issue)) *
              100
            )}%`;

            return (
              <IssueCell key={index}>
                <LeftCellContainer>
                  <UpperCell>
                    <Typos link sm>
                      <MilestoneIcon />
                      {milestone.title}
                    </Typos>
                    <Typos link sm>
                      <Calendar />
                      {milestone.due_date}
                    </Typos>
                  </UpperCell>
                  <Typos sm> {milestone.content}</Typos>
                </LeftCellContainer>
                <RightCellContainer>
                  <Bottom>
                    <EditWrapper link sm>
                      <Archive /> 닫기
                    </EditWrapper>

                    <EditWrapper link sm>
                      <Edit /> 편집
                    </EditWrapper>
                    <TrashContainer link sm>
                      <Trash /> 삭제
                    </TrashContainer>
                  </Bottom>
                  <LowerCell>
                    <ProgressBar percent={progressPercentage} />
                    <Bottom>
                      <Typos xs>{progressPercentage}</Typos>
                      <Typos xs>열린 이슈 {milestone.open_issue}</Typos>
                      <Typos xs>닫힌 이슈 {milestone.closed_issue}</Typos>
                    </Bottom>
                  </LowerCell>
                </RightCellContainer>
              </IssueCell>
            );
          })}
        </TableContainer>
      </MilestoneTableContainer>
    </MilestoneListContainer>
  );
};

const MilestoneListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const MilstoneTab = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const MilestoneTableContainer = styled.div`
  padding: 12px 48px;
  min-width: 1024px;
  border-radius: 16px;
`;

const IconWrapper = styled.div`
  padding-right: 5px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
  }
`;

const MilestoneHeader = styled.div`
  height: 64px;
  background: ${props => props.theme.greyscale.background};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
  display: flex;
  justify-content: flex-start;
  padding: 0 24px;
  & > div {
    padding: 0 18px;
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 5px;
    stroke: ${props => props.theme.greyscale.label};
  }
`;

const IssueCell = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: ${props => props.theme.greyscale.offWhite};
  margin: 1px 0px;
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
  & > div {
    padding: 0 18px;
  }
`;

const TableContainer = styled.div`
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

const LeftCellContainer = styled.div`
  div {
    padding-right: 24px;
  }
`;

const RightCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    padding-left: 24px;
  }
`;

const UpperCell = styled.div`
  display: flex;
  padding-bottom: 24px;
`;

const LowerCell = styled.div`
  /* display: flex; */
`;

const Bottom = styled.div`
  display: flex;
  padding: 14px 0;
`;

const ProgressBar = styled.div<{ percent: string }>`
  width: 244px;
  height: 8px;
  margin-bottom: 3px;
  background: ${props => `linear-gradient(
    90deg,
    #007aff 0%,
    #007aff ${props.percent},
    #eff0f6 ${props.percent},
    #eff0f6 100%
  )`};
  border-radius: 10px;
`;

const MilestoneContainer = styled(Typos)`
  padding-left: 10px;
  color: ${props => props.theme.greyscale.label};
`;

const EditWrapper = styled(Typos)`
  color: ${props => props.theme.greyscale.label};
  svg {
    stroke: ${props => props.theme.greyscale.label};
  }
`;

const TrashContainer = styled(Typos)`
  color: ${props => props.theme.colors.error};
  svg {
    stroke: ${props => props.theme.colors.error};
  }
`;

export default MilestoneList;
