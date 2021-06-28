import React from 'react';
import styled from 'styled-components';
import Modal from '../../../styles/molcules/Modal';
import Typos from '../../../styles/atoms/Typos';
import { ReactComponent as Downward } from '../../../icons/downward.svg';

const AssigneeFilter = ({ filteredAssignee }: any) => {
  const defaultAssignees = [{ optionName: '담당자가 없는 이슈' }];
  return (
    <div>
      <Modal
        options={[...defaultAssignees, ...filteredAssignee]}
        exceptedDiv="filterTitle"
        type="image"
        innerTitle="담당자 필터">
        <Text link sm>
          담당자
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

export default AssigneeFilter;
