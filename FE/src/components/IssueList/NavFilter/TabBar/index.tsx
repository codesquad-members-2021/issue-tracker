import styled from 'styled-components';
import { Box } from '@material-ui/core';
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
const TabBarLayout = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;
