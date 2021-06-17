import { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, Button } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import { menuBtnStyle } from '@styles/chakraStyle';
import AssigneeModal from './AssigneeModal';
import { fetchModal } from '@utils/fetchModal';

function SelectAssignee() {
  const [assignees, setAssignees] = useState(null);

  const handleClickAssignee = () => {
    fetchModal({ path: 'assignees', setState: setAssignees });
  };

  return (
    <Wrap>
      <Menu>
        <MenuButton
          {...menuBtnStyle}
          as={Button}
          rightIcon={<PlusIcon />}
          textAlign="left"
          _focus={{ border: 0 }}
          onClick={handleClickAssignee}
        >
          담당자
        </MenuButton>
        <AssigneeModal assignees={assignees} />
      </Menu>
      {/* ----사용자가 선택한 것들을 렌더링---- */}
      <AddList>
        <li>
          <Avatar size="sm" src="./janmang.jpeg" />
          <Text>Oni</Text>
        </li>
      </AddList>
    </Wrap>
  );
}

export default SelectAssignee;

const Wrap = styled.div`
  padding: 34px 32px 32px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr_line};
`;

const Text = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.gr_titleActive};
`;

const AddList = styled.ul`
  padding: 8px 0;
`;
