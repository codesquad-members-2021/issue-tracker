import styled from 'styled-components';

import { ReactComponent as DropDownIcon } from '@assets/dropDown.svg';
import { ReactComponent as SearchIcon } from '@assets/search.svg';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import MenuTitle from '@components/common/MenuTitle';
import { checkBoxStyle, menuItemStyle } from '@styles/chakraStyle';

function FilterBar() {
  return (
    <FilterBarWrap>
      <Menu>
        <MenuButton
          background="gr_background"
          width="128px"
          as={Button}
          rightIcon={<DropDownIcon />}
          borderRadius="11px 0px 0px 11px"
          border="1px solid gr_inputBackground"
        >
          필터
        </MenuButton>
        <MenuList padding="0">
          <MenuTitle>이슈 필터</MenuTitle>
          <MenuItem {...menuItemStyle}>
            <span>열린 이슈</span>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
          <MenuItem {...menuItemStyle}>
            <span>내가 작성한 이슈</span>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
          <MenuItem {...menuItemStyle}>
            <span>나에게 할당된 이슈</span>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
          <MenuItem {...menuItemStyle}>
            <span>내가 댓글을 남긴 이슈</span>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
          <MenuItem {...menuItemStyle}>
            <span>닫힌 이슈</span>
            <Checkbox {...checkBoxStyle} />
          </MenuItem>
        </MenuList>
      </Menu>
      <InputContainer>
        <SearchIcon />
        <Input placeholder=" " />
      </InputContainer>
    </FilterBarWrap>
  );
}

export default FilterBar;

const FilterBarWrap = styled.div`
  display: flex;
  width: 601px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-radius: 11px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 24px 6px 24px;
  width: 100%;
  height: 100%;
  border-radius: 0px 11px 11px 0px;
  background: ${({ theme }) => theme.colors.gr_inputBackground};
`;

const Input = styled.input`
  margin-left: 24px;
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.colors.gr_inputBackground};
  color: ${({ theme }) => theme.colors.gr_titleActive};
  outline: 0;
`;
