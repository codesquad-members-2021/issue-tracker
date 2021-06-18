import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import Label from '@components/common/Label';
import { modalStyle, modalTitleStyle, modalListStyle } from '../style';
import { checkedLabelsState } from '@store/atoms/checkedThings';

type Props = {
  labels:
    | {
        id: number;
        title: string;
        description: string;
        color_code: string;
        font_light: boolean;
      }[]
    | null;
  errorMsg: string | null;
};

function LabelModal({ labels, errorMsg }: Props) {
  console.log(errorMsg);
  const [checkedLabels, setCheckedLabels] = useRecoilState(checkedLabelsState);
  const modalTitle = errorMsg == null ? '레이블 추가' : errorMsg;

  const handleClickLabel = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const menuItem: HTMLButtonElement | null = target.closest('.label_item');
    if (menuItem == null) return;

    const isChecked = menuItem.getAttribute('aria-checked') === 'false';
    if (isChecked) {
      const labelData = JSON.parse(JSON.stringify(menuItem.dataset));
      setCheckedLabels([...checkedLabels, labelData]);
    } else {
      setCheckedLabels((prev) =>
        prev.filter((label) => label.id !== menuItem.dataset.id)
      );
    }
  };

  return (
    <MenuList {...modalStyle}>
      <MenuOptionGroup
        {...modalTitleStyle}
        type="checkbox"
        title={modalTitle}
        onClick={handleClickLabel}
      >
        {labels &&
          labels.map(({ id, title, color_code, font_light }) => {
            return (
              <MenuItemOption
                {...modalListStyle}
                key={id}
                value={id.toString()}
                className="label_item"
                data-id={id}
                data-title={title}
                data-color_code={color_code}
                data-font_light={font_light}
              >
                <ItemWrap>
                  <Label
                    name={title}
                    colorCode={color_code}
                    fontLight={font_light}
                  />
                </ItemWrap>
              </MenuItemOption>
            );
          })}
      </MenuOptionGroup>
    </MenuList>
  );
}

export default LabelModal;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;
