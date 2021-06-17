import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import IssueDetailTitle from './IssueDetailTitle';
import { Line as S } from '../../styles/CommonStyles';
import IssueDetailBox from './IssueDetailBox';

interface LocationStateProps {
  issueNumber: number;
  title: string;
  content: string;
  isOpen: boolean;
  writer: string;
  date: string;
}

const IssueDetail = (): JSX.Element => {
  const { state } = useLocation<LocationStateProps>();
  const { title, content, isOpen } = state;
  return (
    <>
      <IssueDetailStyle>
        <IssueDetailTitle {...{ title, isOpen }} />
        <S.TableLine />
        <IssueDetailBox />
      </IssueDetailStyle>
    </>
  );
};

export default IssueDetail;

const IssueDetailStyle = styled.div``;
