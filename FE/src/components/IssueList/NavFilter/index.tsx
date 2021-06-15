import styled from 'styled-components';

import SearchBar from './SearchBar';
import TabBar from './TabBar';

const NavFilter = () => {
  return (
    <NavFilterLayout>
      <SearchBar />
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