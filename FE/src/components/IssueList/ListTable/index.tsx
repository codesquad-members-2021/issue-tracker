import styled from 'styled-components';
import { IIssueList } from '..';
import ListHead from './ListHead';
import ListBody from './ListBody';

const ListTable = ({ handleFilterModalClick, ...props } : IIssueList) => {
  return (
    <ListTableLayout {...props}>
      <ListHead handleFilterModalClick={handleFilterModalClick} />
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
  border-radius: 0.5rem;
`;
