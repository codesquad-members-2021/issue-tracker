import styled from 'styled-components';
import { TextIssueList } from '../../../util/reference';
import ListHead from './ListHead';
import ListBody from './ListBody';

const ListTable = ({ ...props }) => {
  const { table: { header } } = TextIssueList;

  return (
    <ListTableLayout {...props}>
      <ListHead headerText={header} />
      <ListBody />
    </ListTableLayout>
  );
};
export default ListTable;

// --- Styled Components ---
const ListTableLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  border-radius: 16px;
`;
