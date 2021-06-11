import styled from 'styled-components';

import Actions from './Actions';
import IssueTable from './tableMain/IssueTable';

function IssueContainer() {
  return (
    <Wrap>
      <Actions />
      <IssueTable />
    </Wrap>
  );
}

export default IssueContainer;

const Wrap = styled.main`
  display: flex;
  flex-direction: column;
`;
