import React from 'react';
import styled from 'styled-components';
import IssueAddTitle from '../IssueAdd/IssueAddTitle';
import IssueAddBox from '../IssueAdd/IssueAddBox';
import { Line as S } from '../../styles/CommonStyles';
import IssueAddButton from './IssueAddButton';

const IssueAdd = (): JSX.Element => {
  return (
    <IssueAddStyle>
      <IssueAddTitle />
      <S.TableLine />
      <IssueAddBox />
      <S.TableLine />
      <IssueAddButton />
    </IssueAddStyle>
  );
};

export default IssueAdd;

const IssueAddStyle = styled.div``;
