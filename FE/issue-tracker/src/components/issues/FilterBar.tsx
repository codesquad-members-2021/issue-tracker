import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ReactComponent as DropDownIcon } from '@assets/dropDown.svg';
import { ReactComponent as SearchIcon } from '@assets/search.svg';
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';
import { filterBarMenuBtn } from '@styles/chakraStyle';

import { filterTextContent, querySet } from '@store/atoms/issueList';

import MenuTitle from '@components/common/MenuTitle';
import { menuOptions } from '@const/var';

function FilterBar() {
  const [query, setQuery] = useRecoilState(querySet);
  const [inputValue, setInputValue] = useRecoilState(filterTextContent);
  const filterInput = useRef<HTMLInputElement | null>(null);

  const changeQuerySet = useCallback((value: string) => {
    // 로그인 ID 값을 추후에 넣는다.
    return {
      open: { closed: 'false' },
      close: { closed: 'true' },
      author: { author: '', assignee: null, comment: null },
      assignee: { author: null, assignee: '', comment: null },
      comment: { author: null, assignee: null, comment: '' },
    }[value];
  }, []);

  const changeFilterInputValue = (condition: string) => {
    const isOpen = query.closed === 'true' ? 'close' : 'open';

    if (condition === 'open' || condition === 'close')
      setInputValue(`is:${condition}`);
    else setInputValue(`is:${isOpen} ${condition}:@me`);
  };

  const handleOptionClick = (e: React.MouseEvent): void => {
    const target = e.target as HTMLButtonElement;
    if (!target.closest('.menu-option')) return;

    const targetValue = target.value;
    const queryNeededToBeChanged = changeQuerySet(targetValue);
    setQuery({
      ...query,
      ...queryNeededToBeChanged,
    });
    changeFilterInputValue(targetValue);
  };

  const handleOnChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <FilterBarWrap>
      <Menu closeOnSelect={true}>
        <MenuButton
          {...filterBarMenuBtn}
          as={Button}
          rightIcon={<DropDownIcon />}
        >
          필터
        </MenuButton>
        <MenuList padding="0" onClick={handleOptionClick}>
          <MenuTitle>이슈 필터</MenuTitle>
          <MenuOptionGroup type="radio" defaultValue="open" background="red">
            {menuOptions.map(({ id, title, value }) => (
              <MenuItemOption className="menu-option" key={id} value={value}>
                {title}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <InputContainer>
        <SearchIcon />
        <Input value={inputValue} onChange={handleOnChange} ref={filterInput} />
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

  span {
    pointer-events: none;
  }
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
  color: ${({ theme }) => theme.colors.gr_label};
  outline: 0;
`;
