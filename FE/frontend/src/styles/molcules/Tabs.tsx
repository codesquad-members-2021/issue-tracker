import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MilestoneIcon } from '../../icons/milestone.svg';
import { ReactComponent as TagIcon } from '../../icons/tag.svg';
import Typos from '../atoms/Typos';
import { Link } from 'react-router-dom';

const Tabs = () => {
  return (
    <TabsWrapper>
      <Label
        style={{ textDecoration: 'none' }}
        className="label target"
        to="labelList">
        <MilestoneIcon />
        <Text link sm>
          레이블
        </Text>
      </Label>
      <Line></Line>
      <Milestone className="milestone target">
        <TagIcon />
        <Text link sm>
          마일스톤
        </Text>
      </Milestone>
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
    width: 160px;
    background: ${props => props.theme.greyscale.background};
    ${props => props.theme.alignCenter}
    &:hover {
      background: ${props => props.theme.greyscale.inputBackground};
    }
  }
`;

const Label = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 11px 0px 0px 11px;
`;

const Line = styled.div`
  width: 1px;
  background: ${props => props.theme.greyscale.line};
`;

const Milestone = styled.div`
  border-radius: 0px 11px 11px 0px;
`;

const Text = styled(Typos)`
  padding-left: 10px;
  color: ${props => props.theme.greyscale.label};
`;

export default Tabs;
