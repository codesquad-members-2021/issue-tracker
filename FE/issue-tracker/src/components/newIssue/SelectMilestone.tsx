import styled from 'styled-components';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Progress,
} from '@chakra-ui/react';

import { Avatar } from '@chakra-ui/avatar';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import MenuTitle from '@components/common/MenuTitle';
import {
  checkBoxStyle,
  menuItemStyle,
  menuBtnStyle,
} from '@styles/chakraStyle';
import { progressBar } from './style';

function SelectMilestone() {
  return (
    <Wrap>
      <Menu>
        <MenuButton
          {...menuBtnStyle}
          as={Button}
          rightIcon={<PlusIcon />}
          textAlign="left"
          _focus={{ border: 0 }}
        >
          마일스톤
        </MenuButton>
        <MenuList>
          <MenuTitle>마일스톤 추가</MenuTitle>
          <MenuItem {...menuItemStyle}>
            <ItemWrap>
              <Avatar className="avatar" size="sm" src="./janmang.jpeg" />
              <Text>Oni</Text>
            </ItemWrap>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
          <MenuItem {...menuItemStyle}>
            <ItemWrap>
              <Avatar className="avatar" size="sm" src="./janmang.jpeg" />
              <Text>Oni</Text>
            </ItemWrap>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
        </MenuList>
      </Menu>
      <AddList>
        <li>
          <Progress {...progressBar} value={32} />
          <span>마스터즈 코스</span>
        </li>
      </AddList>
    </Wrap>
  );
}

export default SelectMilestone;

const Wrap = styled.div`
  padding: 34px 32px 32px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr_line};
`;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.gr_label};
`;

const AddList = styled.ul`
  padding: 8px 0;

  span {
    color: ${({ theme }) => theme.colors.gr_label};
  }
`;
