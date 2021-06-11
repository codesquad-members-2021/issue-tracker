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

function AuthorFilter() {
  return (
    <Menu>
      <MenuButton
        className="menu-title"
        {...menuBtnStyle}
        as={Button}
        rightIcon={<DropDownIcon />}
      >
        작성자
      </MenuButton>
      <MenuList>
        <MenuTitle>작성자 필터</MenuTitle>
        <MenuItem {...menuItemStyle}>
          프로필사진 Q
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
        <MenuItem {...menuItemStyle}>
          프로필사진 Eve
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AuthorFilter;
