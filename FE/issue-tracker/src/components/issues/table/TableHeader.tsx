import styled from 'styled-components';

import { ReactComponent as DropDownIcon } from '@assets/dropDown.svg';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Button } from '@chakra-ui/button';
import { menuBtnStyle } from './style';

function TableHeader() {
  return (
    <TableHeaderWrap>
      <HeaderLeft>
        <input type="checkbox" name="" id="" />
        <IssueTab>
          <li>열린 이슈(2)</li>
          <li>닫힌 이슈(2)</li>
        </IssueTab>
      </HeaderLeft>
      <HeaderRight>
        <FilterLists>
          <Menu>
            <MenuButton
              className="menu-title"
              {...menuBtnStyle}
              as={Button}
              rightIcon={<DropDownIcon />}
            >
              담당자
            </MenuButton>
            <MenuList>
              <div>
                <span>담당자 필터</span>
              </div>
              <MenuItem>
                <span>담당자가 없는 이슈</span>
                <input type="checkbox" name="openIssue" />
              </MenuItem>
              <MenuItem>
                <span>프로필 Q</span>
                <input type="checkbox" name="openIssue" />
              </MenuItem>
            </MenuList>
          </Menu>
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
              <div>
                <span>레이블 필터</span>
              </div>
              <MenuItem>
                <span>레이블이 없는 이슈</span>
                <input type="checkbox" name="openIssue" />
              </MenuItem>
              <MenuItem>
                color Bug
                <input type="checkbox" name="openIssue" />
              </MenuItem>
              <MenuItem>
                color documentation
                <input type="checkbox" name="openIssue" />
              </MenuItem>
            </MenuList>
          </Menu>
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
              <div>
                <span>마일스톤 필터</span>
              </div>
              <MenuItem>
                마일스톤 없는 필터
                <input type="checkbox" name="openIssue" />
              </MenuItem>
              <MenuItem>
                마스터즈 코스
                <input type="checkbox" name="openIssue" />
              </MenuItem>
            </MenuList>
          </Menu>
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
              <div>
                <span>작성자 필터</span>
              </div>
              <MenuItem>
                프로필사진 Q
                <input type="checkbox" name="openIssue" />
              </MenuItem>
              <MenuItem>
                프로필사진 Eve
                <input type="checkbox" name="openIssue" />
              </MenuItem>
            </MenuList>
          </Menu>
        </FilterLists>
      </HeaderRight>
    </TableHeaderWrap>
  );
}

export default TableHeader;

const TableHeaderWrap = styled.div`
  margin-top: 24px;
  padding: 18px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.gr_background};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-radius: 16px 16px 0px 0px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 848px;

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
`;

const FilterLists = styled.div`
  display: flex;

  .menu-title {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }
`;

const IssueTab = styled.ul`
  display: flex;

  li {
    ${({ theme }) => theme.flexCenter}
    margin-left: 24px;
    width: 100px;
    height: 28px;
  }
`;
