import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { MenuList, MenuItem, Checkbox } from '@chakra-ui/react';
import Label from '@components/common/Label';
import MenuTitle from '@components/common/MenuTitle';
import { checkBoxStyle, menuItemStyle } from '@styles/chakraStyle';
import { modalStyle } from '../style';
import { labelType, checkedLabelsState } from '@store/atoms/checkedThings';

type Props = {
  labels: labelType[] | null;
  errorMsg: string;
};

function LabelModal({ labels, errorMsg }: Props) {
  const [checkedLabels, setCheckedLabels] = useRecoilState(checkedLabelsState);
  const modalTitle = errorMsg == 'No Error' ? '레이블 추가' : errorMsg;

  const handleClickMenuItem = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const itemEl = target.closest('.checkbox') as HTMLInputElement;
    const itemId = itemEl.dataset.id;
    if (target.tagName !== 'INPUT' || labels == null || itemId == null) return;

    const clickedItem = labels.find((label) => label.id === +itemId);
    if (clickedItem == null) return;
    const isChecked = checkedLabels.includes(clickedItem) ? false : true;

    if (isChecked) setCheckedLabels([...checkedLabels, clickedItem]);
    else
      setCheckedLabels(
        checkedLabels.filter((label) => label.id !== clickedItem.id)
      );
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
