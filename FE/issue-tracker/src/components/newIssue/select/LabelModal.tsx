import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { MenuList, MenuItem, Checkbox } from '@chakra-ui/react';
import Label from '@components/common/Label';
import MenuTitle from '@components/common/MenuTitle';
import { checkBoxStyle, menuItemStyle } from '@styles/chakraStyle';
import { modalStyle } from '../style';
import { labelType, checkedLabelsState } from '@store/atoms/checkedThings';
import { isCheckedType } from '../../../utils/isChecked_type';
import {
  getCheckedId,
  setIsCheckedAndCheckedItem,
} from '@utils/onClickMenuItem';

type Props = {
  labels: labelType[] | null;
  errorMsg: string;
};

function LabelModal({ labels, errorMsg }: Props) {
  const [checkedLabels, setCheckedLabels] = useRecoilState(checkedLabelsState);
  const [isChecked, setIsChecked] = useState<isCheckedType>({});
  const modalTitle = errorMsg == 'No Error' ? '레이블 추가' : errorMsg;

  const handleClickMenuItem = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const checkedId = getCheckedId({ target: target, menuData: labels });
    if (checkedId == null) return;
    setIsCheckedAndCheckedItem({
      menu: 'label',
      menuData: labels,
      checkedId: checkedId,
      isChecked: isChecked,
      setIsChecked: setIsChecked,
      checkedMenus: checkedLabels,
      setCheckedMenus: setCheckedLabels,
    });
  };

  return (
    <MenuList {...modalStyle} onClick={handleClickMenuItem}>
      <MenuTitle>{modalTitle}</MenuTitle>
      {labels &&
        labels.map(({ id, title, color_code, font_light }) => {
          return (
            <MenuItem key={id} padding="0 0 0 10px" {...menuItemStyle}>
              <Checkbox
                {...checkBoxStyle}
                width="100%"
                className="checkbox"
                data-id={id}
              >
                <ItemWrap>
                  <Label
                    name={title}
                    colorCode={color_code}
                    fontLight={font_light}
                  />
                </ItemWrap>
              </Checkbox>
            </MenuItem>
          );
        })}
    </MenuList>
  );
}

export default LabelModal;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
`;
