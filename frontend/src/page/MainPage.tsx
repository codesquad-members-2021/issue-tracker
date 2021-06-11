import React, { ReactElement } from 'react';
import styled from 'styled-components';
import IssueTable from 'components/issueTable/IssueTable';
import OptionTable from 'components/optionTable/OptionTable';

interface Props {}

export default function MainPage({}: Props): ReactElement {
  return (
    <MainPageBlock>
      <OptionTable />
      <IssueTable />
    </MainPageBlock>
  );
}

const MainPageBlock = styled.div`
  padding: 80px;
`;
