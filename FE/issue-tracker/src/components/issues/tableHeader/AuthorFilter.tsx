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

import { authorFilterList } from '@store/atoms/issueFilter';
import { fetchOnMouseEnter } from '@utils/fetchOnEnter';

import MenuTitle from '@components/common/MenuTitle';

function AuthorFilter() {
  const [authorList, setAuthorList] = useRecoilState(authorFilterList);
  const { data, errorMsg } = authorList;

  return (
    <div onMouseEnter={() => fetchOnMouseEnter(authorList, setAuthorList)}>
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
          {data.length > 0 ? (
            data.map(({ user_id, name, vatar_url }) => {
              return (
                <MenuItem key={user_id} data-id={user_id} {...menuItemStyle}>
                  {name}
                  <Checkbox {...checkBoxStyle} />
                </MenuItem>
              );
            })
          ) : (
            <MenuItem>{errorMsg}</MenuItem>
          )}
        </MenuList>
      </Menu>
    </div>
  );
}

export default AuthorFilter;
