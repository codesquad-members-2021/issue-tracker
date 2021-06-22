import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { MenuList, MenuItem, Checkbox } from '@chakra-ui/react';
import { modalStyle, modalListStyle } from '../style';
import MenuTitle from '@components/common/MenuTitle';
import { checkBoxStyle } from '@styles/chakraStyle';
import {
  milestoneType,
  checkedMilestoneState,
} from '@store/atoms/checkedThings';
import { isCheckedType } from '../../../utils/isChecked_type';
import {
  getCheckedId,
  setIsCheckedAndCheckedItem,
} from '@utils/onClickMenuItem';

type Props = {
  milestones: milestoneType[] | null;
  errorMsg: string;
};

function MilestoneModal({ milestones, errorMsg }: Props) {
  const [checkedMilestones, setCheckedMilestones] = useRecoilState(
    checkedMilestoneState
  );
  const [isChecked, setIsChecked] = useState<isCheckedType>({});
  const modalTitle = errorMsg == 'No Error' ? '마일스톤 추가' : errorMsg;

  const handleClickMenuItem = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const checkedId = getCheckedId({ target: target, menuData: milestones });
    if (checkedId == null) return;
    setIsCheckedAndCheckedItem({
      menu: 'milestone',
      menuData: milestones,
      checkedId: checkedId,
      isChecked: isChecked,
      setIsChecked: setIsChecked,
      checkedMenus: checkedMilestones,
      setCheckedMenus: setCheckedMilestones,
    });
  };

  return (
    <MenuList {...modalStyle} onClick={handleClickMenuItem}>
      <MenuTitle>{modalTitle}</MenuTitle>
      {milestones &&
        milestones.map(({ id, title, due_date }) => {
          return (
            <MenuItem {...modalListStyle} key={id} value={id.toString()}>
              <Checkbox
                {...checkBoxStyle}
                width="100%"
                className="checkbox"
                data-id={id}
                checked={isChecked[id] === true}
              >
                <ItemWrap>
                  <span className="title">{title}</span>
                  <span className="due_date">{due_date}</span>
                </ItemWrap>
              </Checkbox>
            </MenuItem>
          );
        })}
    </MenuList>
  );
}

export default MilestoneModal;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    color: ${({ theme }) => theme.colors.gr_titleActive};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  .due_date {
    color: ${({ theme }) => theme.colors.gr_label};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
