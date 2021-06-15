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

function MilestoneFilter() {
  return (
    <Menu>
      <MenuButton
        className="menu-title"
        {...menuBtnStyle}
        as={Button}
        rightIcon={<DropDownIcon />}
      >
        마일스톤
      </MenuButton>
      <MenuList>
        <MenuTitle>마일스톤 필터</MenuTitle>
        <MenuItem {...menuItemStyle}>
          마일스톤 없는 필터
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
        <MenuItem {...menuItemStyle}>
          마스터즈 코스
          <Checkbox {...checkBoxStyle} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MilestoneFilter;
