import styled from 'styled-components';

import { ReactComponent as DropDownIcon } from '@assets/dropDown.svg';
import { ReactComponent as SearchIcon } from '@assets/search.svg';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Button } from '@chakra-ui/button';

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
          <MenuTitle>
            <span>이슈 필터</span>
          </MenuTitle>
          <MenuItem>
            <span>열린 이슈</span>
            <input type="checkbox" name="openIssue" />
          </MenuItem>
          <MenuItem>
            <span>내가 작성한 이슈</span>
            <input type="checkbox" name="writtenByMe" />
          </MenuItem>
          <MenuItem>
            <span>나에게 할당된 이슈</span>
            <input type="checkbox" name="assigned" />
          </MenuItem>
          <MenuItem>
            <span>내가 댓글을 남긴 이슈</span>
            <input type="checkbox" name="commentByMe" />
          </MenuItem>
          <MenuItem>
            <span>닫힌 이슈</span>
            <input type="checkbox" name="closeIssue" />
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

const MenuTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 240px;
  height: 48px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.gr_background};
  color: ${({ theme }) => theme.colors.gr_titleActive};
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
