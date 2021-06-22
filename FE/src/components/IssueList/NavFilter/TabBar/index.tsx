import styled from 'styled-components';
import Tabs from './Tabs';
import AddButton from './AddButton';
import { IAllGetRequestDatas } from 'util/types';

const TabBar = ({ milestones, labels }: IAllGetRequestDatas) => (
  <TabBarLayout>
    <Tabs {...{ milestones, labels }} />
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
