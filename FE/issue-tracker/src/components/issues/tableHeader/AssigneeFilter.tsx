import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
} from '@chakra-ui/react';

import { ReactComponent as DropDownIcon } from '@assets/dropDown.svg';
import MenuTitle from '@components/common/MenuTitle';
import { checkBoxStyle, menuItemStyle } from '@styles/chakraStyle';
import { menuBtnStyle } from './style';

function AssigneeFilter() {
  return (
    <Menu>
      <MenuButton
        className="menu-title"
        {...menuBtnStyle}
        as={Button}
        rightIcon={<DropDownIcon />}
      >
        담당자
      </MenuButton>
      <MenuList>
        <MenuTitle>담당자 필터</MenuTitle>
        <MenuItem {...menuItemStyle}>
          <span>담당자가 없는 이슈</span>
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
        <MenuItem {...menuItemStyle}>
          <span>프로필 Q</span>
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AssigneeFilter;
