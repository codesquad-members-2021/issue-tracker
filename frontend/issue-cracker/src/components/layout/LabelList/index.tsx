import React from 'react';
import styled from 'styled-components';
import LabelAdd from './LabelAdd';
import LabelNav from './LabelNav';
import LabelTable from './LabelTable';

const LabelList = (): JSX.Element => {
  return (
    <LabeListStyle>
      <LabelNav />
      <LabelAdd />
      <LabelTable />
    </LabeListStyle>
  );
};

export default LabelList;

const LabeListStyle = styled.div``;
