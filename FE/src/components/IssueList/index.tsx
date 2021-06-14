import { Box } from '@material-ui/core';
import styled from 'styled-components';
import ListModal, { testData } from '../Common/ListModal';
import ListTable from './ListTable';
import NavFilter from './NavFilter';

const IssueList = () => {
  const data = {
    title: '이슈 필터',
    items: testData,
  };

  return (
    <IssueListLayout>
      <NavFilter />
      <ListTable />
      <ListModal
        data={data}
        isModalVisible={true}
        setIsModalVisible={() => {}}
      />
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
