import styled from 'styled-components';
import { IIssueListChildren } from '..';
import ListHead from './ListHead';
import ListBody from './ListBody';

const ListTable = ({ data, handleFilterModalClick, ...props } : IIssueListChildren) => {
  return (
    <ListTableLayout {...props}>
      <ListHead {...{data, handleFilterModalClick}} />
      <ListBody {...{data}} />
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
