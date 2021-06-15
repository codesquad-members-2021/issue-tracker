import { ButtonGroup, Button } from '@material-ui/core';
import styled from 'styled-components';
import { TextIssueList } from '../../../../util/reference';
import { IconLabel, IconMileStone } from '../../../Common/Icons';

const Tabs = () => {
  const { tabs } = TextIssueList;

  // render 관련
  const renderTabButtons = () =>
    tabs.map(({ name, value }, idx) => (
      <TabButton name={name} key={idx}>
        <span>{name === 'label' ? <IconLabel /> : <IconMileStone />}</span>
        <span>{value}</span>
        <span>(3)</span>
      </TabButton>
    ));

  return (
    <TabsLayout>
      <ButtonGroup color="default">{renderTabButtons()}</ButtonGroup>
    </TabsLayout>
  );
};

export default Tabs;

// --- Styled Components ---
const TabsLayout = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.1rem;
  border: 1px solid transparent;
`;

const TabButton = styled(Button)`
  display: flex;
  align-items: center;

  border: none;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  padding: 0.4rem 1.4rem;
  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  }

  span { display: flex; align-items: center; }
  span + span { margin-left: 0.4rem; }
`;
