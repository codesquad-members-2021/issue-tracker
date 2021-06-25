import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import useMutate from '../../../util/useMutate';
import useFetch from '../../../util/useFetch';
import Tabs from '../../../styles/molcules/Tabs';
import Buttons from '../../../styles/atoms/Buttons';
import Typos from '../../../styles/atoms/Typos';
import Label from '../../../styles/atoms/Label';
import NewLabel from './NewLabel';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { ReactComponent as Edit } from '../../../icons/edit.svg';
import { ReactComponent as Trash } from '../../../icons/trash.svg';
import { ReactComponent as XSquare } from '../../../icons/xSquare.svg';

const LabelList = () => {
  const { isLoading, data, error, refetch } = useFetch('label', 'getAllData');
  const [isNewLabelOpened, setIsNewLabelOpened] = useState(false);
  const { mutateAsync: DeleteAsync, isSuccess: isDeleteSuccess } = useMutation(
    useMutate('label', 'delete'),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const setAddLabel = () => {
    setIsNewLabelOpened(!isNewLabelOpened);
  };

  const deleteLabel = async (id: number) => {
    await DeleteAsync({ id: id });

    if (isDeleteSuccess) {
      refetch();
    }
  };

  return (
    <LabelListContainer>
      <LabelTab>
        <Tabs />
        {!isNewLabelOpened && (
          <Buttons initial small onClick={setAddLabel}>
            <IconWrapper>
              <Plus />
            </IconWrapper>
            추가
          </Buttons>
        )}
        {isNewLabelOpened && (
          <Buttons detail small onClick={setAddLabel}>
            <IconWrapper className="xSquare">
              <XSquare />
            </IconWrapper>
            닫기
          </Buttons>
        )}
      </LabelTab>

      <LabelTableContainer>
        {isNewLabelOpened && <NewLabel />}
        <LabelHeader>
          <Typos link sm>
            개의 레이블
          </Typos>
        </LabelHeader>
        <TableContainer>
          {data?.map((label: any, index: number) => {
            return (
              <IssueCell>
                <LeftCellContainer>
                  <Label
                    key={index}
                    title={label.title}
                    background={label.color}
                  />
                  <Typos sm>{label.content}</Typos>
                </LeftCellContainer>
                <RightCellContainer>
                  <EditWrapper link sm>
                    <Edit /> 편집
                  </EditWrapper>
                  <TrashWrapper
                    link
                    sm
                    onClick={() => {
                      deleteLabel(label.id);
                    }}>
                    <Trash /> 삭제
                  </TrashWrapper>
                </RightCellContainer>
              </IssueCell>
            );
          })}
        </TableContainer>
      </LabelTableContainer>
    </LabelListContainer>
  );
};

const LabelListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const LabelTab = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
  .xSquare {
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
`;

const LabelTableContainer = styled.div`
  padding: 12px 48px;
  min-width: 1024px;
  border-radius: 16px;
`;

const LabelHeader = styled.div`
  height: 64px;
  background: ${props => props.theme.greyscale.background};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 16px 16px 0px 0px;
  margin-top: 24px;
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

const TableContainer = styled.div`
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

const LeftCellContainer = styled.div`
  & > div {
    margin: 0 24px;
  }
`;

const RightCellContainer = styled.div`
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
