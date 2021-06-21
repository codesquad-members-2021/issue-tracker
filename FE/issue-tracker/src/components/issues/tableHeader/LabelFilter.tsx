import { useState } from 'react';
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

import { querySet } from '@store/atoms/issueList';
import { labelFilterList } from '@store/atoms/issueFilter';
import { fetchOnMouseEnter } from '@utils/fetchOnEnter';

import MenuTitle from '@components/common/MenuTitle';
import type { CheckBoxs } from './MilestoneFilter';

function LabelFilter() {
  const [labelList, setLabelList] = useRecoilState(labelFilterList);
  const [query, setQuery] = useRecoilState(querySet);

  const { data } = labelList;
  const [isChecked, setChecked] = useState<CheckBoxs>({});

  const handleClickCheckBox = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const checkNumber = target.id;
    if (checkNumber === '') return;

    const toggleBoolean = isChecked[checkNumber] === true ? false : true;
    if (toggleBoolean)
      setQuery({
        closed: null,
        author: null,
        assignee: null,
        label: Number(checkNumber),
        milestone: null,
      });

    setChecked({
      ...isChecked,
      [checkNumber]: toggleBoolean,
    });
  };

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
              <MenuItem
                key={id}
                onClick={handleClickCheckBox}
                {...menuItemStyle}
              >
                {title}
                <Checkbox id={id} checked={isChecked[id]} {...checkBoxStyle} />
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

export default LabelFilter;
