import styled from 'styled-components';
import { MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { modalStyle, modalTitleStyle, modalListStyle } from '../style';

type Props = {
  assignees: { user_id: number; name: string; avatar_url: string }[] | null;
};

function AssigneeModal({ assignees }: Props) {
  return (
    <MenuList {...modalStyle}>
      <MenuOptionGroup {...modalTitleStyle} type="checkbox" title="담당자 추가">
        {assignees &&
          assignees.map(({ user_id, name, avatar_url }) => {
            return (
              <MenuItemOption
                {...modalListStyle}
                value={user_id.toString()}
                key={user_id}
              >
                <ItemWrap>
                  <Avatar size="sm" src={avatar_url} />
                  <Text>{name}</Text>
                </ItemWrap>
              </MenuItemOption>
            );
          })}
      </MenuOptionGroup>
    </MenuList>
  );
}

export default AssigneeModal;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.gr_titleActive};
`;
