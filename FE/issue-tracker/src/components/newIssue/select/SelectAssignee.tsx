import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Menu, MenuButton, Button } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import { menuBtnStyle } from '@styles/chakraStyle';
import AssigneeModal from './AssigneeModal';
import { fetchModal } from '@utils/fetchModal';
import { checkedAssigneesState } from '@store/atoms/checkedThings';

function SelectAssignee() {
  const [assignees, setAssignees] = useState(null);
  const [errorMsg, setErrorMsg] = useState('No Error');
  const checkedAssignees = useRecoilValue(checkedAssigneesState);

  const handleClickAssignee = () => {
    fetchModal({
      path: 'assignees',
      setState: setAssignees,
      setErrorMsg: setErrorMsg,
    });
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
        <AssigneeModal assignees={assignees} errorMsg={errorMsg} />
      </Menu>
      <AddList>
        {checkedAssignees.map(({ user_id, name, avatar_url }) => {
          return (
            <li key={user_id}>
              <Avatar size="sm" src={avatar_url} />
              <Text>{name}</Text>
            </li>
          );
        })}
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
  li {
    padding: 0.3rem;
  }
`;
