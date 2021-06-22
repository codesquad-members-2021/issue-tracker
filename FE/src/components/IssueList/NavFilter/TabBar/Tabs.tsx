import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@material-ui/core';
import { TextIssueList } from 'util/reference';
import { IAllGetRequestDatas } from 'util/types';
import { IconLabel, IconMileStone } from 'components/Common/Icons';

const Tabs = ({ milestones, labels }: IAllGetRequestDatas) => {
  const { tabs } = TextIssueList;

  const [milestoneCount, setMilestoneCount] = useState(0);
  const [labelsCount, setLabelCount] = useState(0);

  useEffect(() => {
    if (!milestones) return;
    const arrMilestones = milestones.milestones;
    setMilestoneCount(arrMilestones.length);
  }, [milestones]);

  useEffect(() => {
    if (!labels) return;
    const arrLabels = labels.labels;
    setLabelCount(arrLabels.length);
  }, [labels]);

  // render 관련
  const renderTabButtons = () =>
    tabs.map(({ name, value }, idx) => (
      <TabButton key={idx} name={name}>
        <Link to={name === 'label' ? '/labels' : '/milestones'}>
          <span className="icon">{name === 'label' ? <IconLabel /> : <IconMileStone />}</span>
          <span>{value}</span>
          <span className="count">({name === 'label' ? labelsCount : milestoneCount})</span>
        </Link>
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
  padding: 0;
  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  }

  a {
    display: flex;
    text-decoration: none;
    padding: 0.4rem 1.4rem;
    column-gap: .4rem;
  }

  span {
    display: flex;
    align-items: center;
  }
`;