import React from 'react';
import styled from 'styled-components';
import Modal from '../../../styles/molcules/Modal';
import Typos from '../../../styles/atoms/Typos';
import { ReactComponent as Downward } from '../../../icons/downward.svg';

const LabelFilter = ({ filteredLabels }: any) => {
  const defaultLabels = [{ optionName: '레이블이 없는 이슈' }];
  return (
    <div>
      <Modal
        options={[...defaultLabels, ...filteredLabels]}
        exceptedDiv="filterTitle"
        type="image"
        innerTitle="레이블 필터">
        <Text link sm>
          레이블
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

export default LabelFilter;
