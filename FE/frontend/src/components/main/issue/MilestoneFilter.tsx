import React from 'react';
import styled from 'styled-components';
import Modal from '../../../styles/molcules/Modal';
import Typos from '../../../styles/atoms/Typos';
import { ReactComponent as Downward } from '../../../icons/downward.svg';

const MilestoneFilter = ({ filteredMilestone }: any) => {
  const defaultMilestones = [{ optionName: '마일스톤이 없는 이슈' }];
  return (
    <div>
      <Modal
        options={[...defaultMilestones, ...filteredMilestone]}
        exceptedDiv="filterTitle"
        type="text"
        innerTitle="마일스톤 필터">
        <Text link sm>
          마일스톤
          <Downward />
        </Text>
      </Modal>
    </div>
  );
};

const Text = styled(Typos)`
  color: ${props => props.theme.greyscale.label};
  svg {
    margin: 2px 0 0 10px;
  }
`;

export default MilestoneFilter;
