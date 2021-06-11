import styled from 'styled-components';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
} from '@chakra-ui/react';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import MenuTitle from '@components/common/MenuTitle';
import Label from '@components/common/Label';
import {
  checkBoxStyle,
  menuItemStyle,
  menuBtnStyle,
} from '@components/common/chakraStyle';

function SelectLabel() {
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
          레이블
        </MenuButton>
        <MenuList>
          <MenuTitle>레이블 추가</MenuTitle>
          <MenuItem {...menuItemStyle}>
            <ItemWrap>
              <Label
                name="documentation"
                colorCode="#0025E7"
                fontLight={true}
              />
            </ItemWrap>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
        </MenuList>
      </Menu>
      <AddList>
        <li>
          <Label name="documentation" colorCode="#0025E7" fontLight={true} />
        </li>
      </AddList>
      <AddList>
        <li>
          <Label name="eveBabo" colorCode="#531253" fontLight={true}></Label>
        </li>
      </AddList>
    </Wrap>
  );
}

export default SelectLabel;

const Wrap = styled.div`
  padding: 34px 32px 32px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr_line};
`;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;

const AddList = styled.ul`
  padding: 8px 0;
`;
