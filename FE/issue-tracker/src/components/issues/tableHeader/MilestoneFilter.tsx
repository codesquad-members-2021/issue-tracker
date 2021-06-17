import { useRecoilState } from 'recoil';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import { checkBoxStyle, menuItemStyle } from '@styles/chakraStyle';
import { ReactComponent as DropDownIcon } from '@assets/dropDown.svg';
import { menuBtnStyle } from './style';

import { milestoneFilterList } from '@store/atoms/issueFilter';

import MenuTitle from '@components/common/MenuTitle';
import { fetchOnMouseEnter } from '@utils/fetchOnEnter';

function MilestoneFilter() {
  const [milestoneList, setMilestoneList] = useRecoilState(milestoneFilterList);
  const { data } = milestoneList;

  return (
    <div
      onMouseEnter={() => fetchOnMouseEnter(milestoneList, setMilestoneList)}
    >
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
          {data.map(({ id, title }) => {
            return (
              <MenuItem key={id} {...menuItemStyle}>
                {title}
                <Checkbox {...checkBoxStyle} />
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

export default MilestoneFilter;
