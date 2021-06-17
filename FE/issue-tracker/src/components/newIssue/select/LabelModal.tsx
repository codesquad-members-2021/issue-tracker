import styled from 'styled-components';
import { MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';

import Label from '@components/common/Label';
import { modalStyle, modalTitleStyle, modalListStyle } from '../style';

type Props = {
  labels:
    | {
        id: number;
        title: string;
        description: string;
        color_code: string;
        text_color: string;
      }[]
    | null;
};

function LabelModal({ labels }: Props) {
  return (
    <MenuList {...modalStyle}>
      <MenuOptionGroup {...modalTitleStyle} type="checkbox" title="레이블 추가">
        {labels &&
          labels.map(({ id, title, color_code }) => {
            return (
              <MenuItemOption
                {...modalListStyle}
                value={id.toString()}
                key={id}
              >
                <ItemWrap>
                  <Label name={title} colorCode={color_code} fontLight={true} />
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
