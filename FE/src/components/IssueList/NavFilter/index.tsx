import styled from 'styled-components';
import { IIssueList } from '..';
import SearchBar from './SearchBar';
import TabBar from './TabBar';

const NavFilter = ({ handleFilterModalClick } : IIssueList) => {
  return (
    <NavFilterLayout>
      <SearchBar handleFilterModalClick={handleFilterModalClick} />
      <TabBar />
    </NavFilterLayout>
  );
};
export default NavFilter;

// --- Styled Components ---
const NavFilterLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.S};
`;
