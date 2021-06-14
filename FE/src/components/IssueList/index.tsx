import { Box } from '@material-ui/core';
import styled from 'styled-components';
import ListTable from './ListTable';
import NavFilter from './NavFilter';

const IssueList = () => {
  return (
    <IssueListLayout>
      <NavFilter />
      <ListTable />
    </IssueListLayout>
  );
};

export default IssueList;

// --- Styled Components ---
const IssueListLayout = styled(Box)`
  display: flex;
  row-gap: 1.2rem;
  align-items: center;
  flex-wrap: wrap;
`;
