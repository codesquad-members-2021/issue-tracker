import React from 'react';
import styled from 'styled-components';
import Modal from '../../../styles/molcules/Modal';
import Typos from '../../../styles/atoms/Typos';
import { ReactComponent as Downward } from '../../../icons/downward.svg';

const AuthorFilter = ({ filteredAuthor }: any) => {
  const defaultAuthor = [{ optionName: '작성자가 없는 이슈' }];
  return (
    <div>
      <Modal
        options={[...defaultAuthor, ...filteredAuthor]}
        exceptedDiv="filterTitle"
        type="image"
        innerTitle="작성자 필터">
        <Text link sm>
          작성자
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

export default AuthorFilter;
