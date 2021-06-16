import styled from 'styled-components';
import { Menu, MenuButton, Button } from '@chakra-ui/react';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import Label from '@components/common/Label';
import { menuBtnStyle } from '@styles/chakraStyle';
import LabelModal from './LabelModal';

function SelectLabel() {
  return (
    <Wrap>
      <Menu>
        <MenuButton
          {...menuBtnStyle}
          as={Button}
          rightIcon={<PlusIcon />}
          textAlign="left"
          _focus={{ border: 0 }}
        >
          레이블
        </MenuButton>
        <LabelModal />
      </Menu>
      <AddList>
        <li>
          <Label name="documentation" colorCode="#0025E7" fontLight={true} />
        </li>
      </AddList>
    </Wrap>
  );
}

export default SelectLabel;

const Wrap = styled.div`
  padding: 34px 32px 32px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr_line};
`;

const AddList = styled.ul`
  padding: 8px 0;
`;
