import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useFetch from '../../util/useFetch';
import Typos from '../atoms/Typos';
import { ReactComponent as MilestoneIcon } from '../../icons/milestone.svg';
import { ReactComponent as TagIcon } from '../../icons/tag.svg';

const Tabs = () => {
  const { data: count } = useFetch('common', 'count');
  const totalMilestoneCount = count?.open_milestones + count?.closed_milestones;

  return (
    <TabsWrapper>
      <Label
        style={{ textDecoration: 'none' }}
        className="label target"
        to="labelList">
        <TagIcon />
        <Text link sm>
          레이블 ({count?.labels})
        </Text>
      </Label>
      <Line></Line>
      <Label
        style={{ textDecoration: 'none' }}
        className="milestone target"
        to="milestoneList">
        <MilestoneIcon />
        <Text link sm>
          마일스톤 ({totalMilestoneCount})
        </Text>
      </Label>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  width: 321px;
  height: 40px;
  margin-right: 16px;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 11px;

  .label,
  .milestone {
    cursor: pointer;
    width: 158px;
    background: ${props => props.theme.greyscale.background};
    ${props => props.theme.alignCenter}
    &:hover {
      background: ${props => props.theme.greyscale.inputBackground};
    }
  }
  .label {
    border-radius: 11px 0px 0px 11px;
  }
  .milestone {
    border-radius: 0px 11px 11px 0px;
    svg {
      fill: ${props => props.theme.greyscale.body};
    }
  }
`;

const Label = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Line = styled.div`
  width: 1px;
  background: ${props => props.theme.greyscale.line};
`;

const Text = styled(Typos)`
  padding-left: 10px;
  color: ${props => props.theme.greyscale.label};
`;

export default Tabs;
