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
import { checkBoxStyle, menuItemStyle } from '@components/common/chakraStyle';
import { menuBtnStyle } from './style';

function LabelFilter() {
  return (
    <Menu>
      <MenuButton
        className="menu-title"
        {...menuBtnStyle}
        as={Button}
        rightIcon={<DropDownIcon />}
      >
        레이블
      </MenuButton>
      <MenuList>
        <MenuTitle>레이블 필터</MenuTitle>
        <MenuItem {...menuItemStyle}>
          <span>레이블이 없는 이슈</span>
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
        <MenuItem {...menuItemStyle}>
          color Bug
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
        <MenuItem {...menuItemStyle}>
          color documentation
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default LabelFilter;
