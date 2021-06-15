import React from 'react';
import styled from 'styled-components';
import Typo from '../../../styles/atoms/Typos';
import CheckBox from '../../../styles/atoms/CheckBox';
import { ReactComponent as AlertCircle } from '../../../icons/alertCircle.svg';
import { ReactComponent as Archive } from '../../../icons/archive.svg';
import ListFilters from './ListFilters';
import useFetch from '../../../util/useFetch';

const IssueTable = () => {
  const { isLoading, data, error } = useFetch('issue', 'getAllData');
  return (
    <>
      <IssueHeader>
        <LeftHeaderWrapper>
          <CheckBox />
          <Text link sm>
            <AlertCircle />
            열린 이슈
          </Text>
          <Text link sm>
            <Archive />
            닫힌 이슈
          </Text>
        </LeftHeaderWrapper>
        <ListFilters />
      </IssueHeader>
      <div>
        {data?.map((issue: any) => {
          return (
            <IssueCell>
              <CheckBox />
              <AlertCircle />
              <div>{issue.title}</div>
              <div>
                {issue.labels.map((label: any) => {
                  return <></>;
                })}
              </div>
              <div>{issue.id}</div>
              <div>
                {issue.writer.username}가 {issue.created_time}에 만들었습니다
              </div>
              <div>{issue.milestone.title}</div>
              <div>{issue.writer.profile_image}</div>
            </IssueCell>
          );
        })}
      </div>
    </>
  );
};

const IssueHeader = styled.div`
  height: 64px;
  background: ${props => props.theme.greyscale.background};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const LeftHeaderWrapper = styled.div`
  padding: 0 24px;
  div {
    padding: 0 18px;
  }
  svg {
    stroke: ${props => props.theme.greyscale.titleActive};
  }
`;

const IssueCell = styled.div`
  height: 100px;
  background: ${props => props.theme.greyscale.offWhite};
  margin: 1px 0px;
  svg {
    stroke: ${props => props.theme.colors.primary};
    fill: ${props => props.theme.colors.lightBlue};
  }
`;

const Text = styled(Typo)`
  svg {
    margin: 2px 6px 0 6px;
  }
`;

export default IssueTable;
