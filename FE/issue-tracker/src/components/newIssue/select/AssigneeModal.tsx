import styled from 'styled-components';
import { MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { modalStyle, modalTitleStyle, modalListStyle } from '../style';

function AssigneeModal() {
  return (
    <MenuList {...modalStyle}>
      <MenuOptionGroup {...modalTitleStyle} type="checkbox" title="담당자 추가">
        <MenuItemOption {...modalListStyle} value="Qbabo">
          <ItemWrap>
            <Avatar size="sm" src="./janmang.jpeg" />
            <Text>Qbabo</Text>
          </ItemWrap>
        </MenuItemOption>
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
