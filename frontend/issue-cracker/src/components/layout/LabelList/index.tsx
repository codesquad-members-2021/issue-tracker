import React from 'react';
import styled from 'styled-components';
import LabelNav from './LabelNav';
import LabelTable from './LabelTable';

const LabelList = (): JSX.Element => {
  return (
    <LabeListStyle>
      <LabelNav />
      <LabelTable />
    </LabeListStyle>
  );
};

export default LabelList;

const LabeListStyle = styled.div``;
