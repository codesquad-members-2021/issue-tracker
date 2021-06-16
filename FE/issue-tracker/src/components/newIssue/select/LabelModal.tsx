import styled from 'styled-components';
import { MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';

import Label from '@components/common/Label';
import { modalStyle, modalTitleStyle, modalListStyle } from '../style';

function LabelModal() {
  return (
    <MenuList {...modalStyle}>
      <MenuOptionGroup {...modalTitleStyle} type="checkbox" title="레이블 추가">
        <MenuItemOption {...modalListStyle} value="Qbabo">
          <ItemWrap>
            <Label name="Qbabo" colorCode="#00A5B7" fontLight={true} />
          </ItemWrap>
        </MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  );
}

export default LabelModal;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;
