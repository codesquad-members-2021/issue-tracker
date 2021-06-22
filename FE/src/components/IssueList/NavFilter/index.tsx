import styled from 'styled-components';
import { IIssueListChildren } from '..';
import SearchBar from './SearchBar';
import TabBar from './TabBar';

const NavFilter = ({ data, handleFilterModalClick }: IIssueListChildren) => {
  return (
    <NavFilterLayout>
      <SearchBar {...{ handleFilterModalClick }} />
      <TabBar milestones={data?.milestones} labels={data?.labels} />
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
