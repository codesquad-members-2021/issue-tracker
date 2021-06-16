import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { addState } from '../../../store/Recoil';
import LabelAdd from './LabelAdd';
import LabelNav from './LabelNav';
import LabelTable from './LabelTable';

const LabelList = (): JSX.Element => {
  const issueAddState = useRecoilValue(addState);

  return (
    <LabeListStyle>
      <LabelNav />
      {issueAddState && <LabelAdd />}
      <LabelTable />
    </LabeListStyle>
  );
};

export default LabelList;

const LabeListStyle = styled.div``;
