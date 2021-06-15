import React from 'react';
import styled from 'styled-components';
import Tabs from '../../../styles/molcules/Tabs';
import Buttons from '../../../styles/atoms/Buttons';
import Typos from '../../../styles/atoms/Typos';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { ReactComponent as Edit } from '../../../icons/edit.svg';
import { ReactComponent as Trash } from '../../../icons/trash.svg';
import useFetch from '../../../util/useFetch';
import Label from '../../../styles/atoms/Label';

const LabelList = () => {
  const { isLoading, data, error } = useFetch('label', 'getAllData');

  return (
    <LabelListWrapper>
      <LabelTab>
        <Tabs />
        <Buttons initial small>
          <IconWrapper>
            <Plus />
          </IconWrapper>
          추가
        </Buttons>
      </LabelTab>
      <LabelTableWrapper>
        <LabelHeader>
          <Typos link sm>
            개의 레이블
          </Typos>
        </LabelHeader>
        <TableWrapper>
          {data?.map((label: any, index: number) => {
            return (
              <IssueCell>
                <LeftCellWrapper>
                  <Label key={index} title={label.title} color={label.color} />
                  <Typos sm>{label.content}</Typos>
                </LeftCellWrapper>
                <RightCellWrapper>
                  <EditWrapper link sm>
                    <Edit /> 편집
                  </EditWrapper>
                  <TrashWrapper link sm>
                    <Trash /> 삭제
                  </TrashWrapper>
                </RightCellWrapper>
              </IssueCell>
            );
          })}
        </TableWrapper>
      </LabelTableWrapper>
    </LabelListWrapper>
  );
};

const LabelListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const LabelTab = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const LabelTableWrapper = styled.div`
  padding: 12px 48px;
  min-width: 1024px;
  border-radius: 16px;
`;

const LabelHeader = styled.div`
  height: 64px;
  background: ${props => props.theme.greyscale.background};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
  padding-left: 48px;
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  padding-right: 5px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
  }
`;

const TableWrapper = styled.div`
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

const IssueCell = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  background: ${props => props.theme.greyscale.offWhite};
  margin: 1px 0px;
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
  & > div {
    display: flex;
    align-items: center;
  }
`;

const LeftCellWrapper = styled.div`
  & > div {
    margin: 0 24px;
  }
`;

const RightCellWrapper = styled.div`
  div {
    padding: 0 18px;
  }
  svg {
    margin: 2px 3px 0px 3px;
  }
`;

const EditWrapper = styled(Typos)`
  color: ${props => props.theme.greyscale.label};
  svg {
    stroke: ${props => props.theme.greyscale.label};
  }
`;

const TrashWrapper = styled(Typos)`
  color: ${props => props.theme.colors.error};
  svg {
    stroke: ${props => props.theme.colors.error};
  }
`;

export default LabelList;
