import styled from 'styled-components';
import Tabs from './Tabs';
import AddButton from './AddButton';

const TabBar = () => (
  <TabBarLayout>
    <Tabs />
    <AddButton />
  </TabBarLayout>
);
export default TabBar;

// --- Styled Components ---
const TabBarLayout = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;
