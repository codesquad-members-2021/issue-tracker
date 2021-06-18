import { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, Button } from '@chakra-ui/react';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import Label from '@components/common/Label';
import { menuBtnStyle } from '@styles/chakraStyle';
import LabelModal from './LabelModal';
import { fetchModal } from '@utils/fetchModal';

function SelectLabel() {
  const [labels, setLabels] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleClickLabels = () => {
    const fetchLabels = async () => {
      try {
        await fetchModal({ path: 'labels', setState: setLabels });
      } catch (errorTxt) {
        setErrorMsg(errorTxt);
      }
    };
    fetchLabels();
  };

  return (
    <Wrap>
      <Menu>
        <MenuButton
          {...menuBtnStyle}
          as={Button}
          rightIcon={<PlusIcon />}
          textAlign="left"
          _focus={{ border: 0 }}
          onClick={handleClickLabels}
        >
          레이블
        </MenuButton>
        <LabelModal labels={labels} errorMsg={errorMsg} />
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
