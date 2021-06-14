import styled from 'styled-components';
import NavFilter from './NavFilter';

const IssueList = () => {
  return (
    <IssueListLayout>
      <NavFilter />
    </IssueListLayout>
  );
};

export default IssueList;

// --- Styled Components ---
const IssueListLayout = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
