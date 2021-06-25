import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { MenuList, MenuItem, Checkbox } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import MenuTitle from '@components/common/MenuTitle';
import { checkBoxStyle, menuItemStyle } from '@styles/chakraStyle';
import { modalStyle } from '../style';
import { assigneeType, checkedAssigneesAtom } from '@store/atoms/checkedThings';

type Props = {
  assignees: assigneeType[] | null;
  errorMsg: string;
};

function AssigneeModal({ assignees, errorMsg }: Props) {
  const [checkedAssignees, setCheckedAssignees] =
    useRecoilState(checkedAssigneesAtom);
  const modalTitle = errorMsg == 'No Error' ? '담당자 추가' : errorMsg;

  const handleClickMenuItem = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const itemEl = target.closest('.checkbox') as HTMLInputElement;
    const itemId = Number(itemEl.dataset.id);
    if (target.tagName !== 'INPUT' || assignees == null || itemId == null)
      return;

    const isChecked = checkedAssignees.includes(itemId) ? false : true;
    if (isChecked) setCheckedAssignees([...checkedAssignees, itemId]);
    else setCheckedAssignees(checkedAssignees.filter((id) => id !== itemId));
  };

  return (
    <MenuList {...modalStyle} onClick={handleClickMenuItem}>
      <MenuTitle>{modalTitle}</MenuTitle>
      {assignees &&
        assignees.map(({ user_id, name, avatar_url }) => {
          return (
            <MenuItem key={user_id} padding="0 0 0 10px" {...menuItemStyle}>
              <Checkbox
                {...checkBoxStyle}
                width="100%"
                className="checkbox"
                data-id={user_id}
              >
                <ItemWrap>
                  <Avatar size="sm" src={avatar_url} />
                  <Text>{name}</Text>
                </ItemWrap>
              </Checkbox>
            </MenuItem>
          );
        })}
    </MenuList>
  );
}

export default AssigneeModal;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
`;

const Text = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.gr_titleActive};
`;
