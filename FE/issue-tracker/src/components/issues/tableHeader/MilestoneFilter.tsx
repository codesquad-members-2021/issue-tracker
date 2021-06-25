import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

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
import { milestoneFilterList } from '@store/atoms/issueFilter';

import MenuTitle from '@components/common/MenuTitle';
import { fetchOnMouseEnter } from '@utils/fetchOnEnter';

function MilestoneFilter() {
  const [milestoneList, setMilestoneList] = useRecoilState(milestoneFilterList);
  const [query, setQuery] = useRecoilState(querySet);
  const { data } = milestoneList;
  const [isChecked, setChecked] = useState<CheckBoxs>({});

  const handleClickCheckBox = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const checkNumber = target.id;
    if (checkNumber === '') return;

    const toggleBoolean = isChecked[checkNumber] === true ? false : true;
    if (toggleBoolean)
      setQuery({
        ...query,
        milestone: Number(checkNumber),
      });

    setChecked({
      ...isChecked,
      [checkNumber]: toggleBoolean,
    });
  };

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
              <ModalWrap key={id} onClick={handleClickCheckBox} id={id}>
                <Checkbox
                  className="checkBox"
                  id={id}
                  checked={isChecked[id]}
                  {...checkBoxStyle}
                >
                  <MenuItem {...menuItemStyle} pointerEvents="none">
                    {title}
                  </MenuItem>
                </Checkbox>
              </ModalWrap>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

export default MilestoneFilter;

export type CheckBoxs = {
  [id: string]: boolean;
};

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gr_inputBackground};
  }
`;
