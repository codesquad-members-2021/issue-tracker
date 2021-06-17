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

import { labelFilterList } from '@store/atoms/issueFilter';
import { fetchOnMouseEnter } from '@utils/fetchOnEnter';

import MenuTitle from '@components/common/MenuTitle';

function LabelFilter() {
  const [labelList, setLabelList] = useRecoilState(labelFilterList);
  const { data } = labelList;

  return (
    <div onMouseEnter={() => fetchOnMouseEnter(labelList, setLabelList)}>
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

export default LabelFilter;
