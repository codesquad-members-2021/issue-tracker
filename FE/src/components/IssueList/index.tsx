import { Box } from '@material-ui/core';
import styled from 'styled-components';
import IssueTable from './IssueTable';
import NavFilter from './NavFilter';

const IssueList = () => {
  return (
    <IssueListLayout>
      <NavFilter />
      <IssueTable />
    </IssueListLayout>
  );
};

export default IssueList;

// --- Styled Components ---
const IssueListLayout = styled(Box)`
  display: flex;
  row-gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;
