import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Menu, MenuButton, Button } from '@chakra-ui/react';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import Label from '@components/common/Label';
import { menuBtnStyle } from '@styles/chakraStyle';
import LabelModal from './LabelModal';
import { fetchModal } from '@utils/fetchModal';
import { labelType, checkedLabelsAtom } from '@store/atoms/checkedThings';

function SelectLabel() {
  const [labels, setLabels] = useState<labelType[] | null>(null);
  const [errorMsg, setErrorMsg] = useState('No Error');
  const checkedLabels = useRecoilValue(checkedLabelsAtom);

  const checkedLabelsInfo = checkedLabels.map((id) => {
    if (labels !== null) return labels.find((label) => label.id === id);
  }) as labelType[];

  const handleClickLabels = () => {
    fetchModal({
      path: 'labels',
      setState: setLabels,
      setErrorMsg: setErrorMsg,
    });
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
        {checkedLabelsInfo &&
          checkedLabelsInfo.map(({ title, color_code, font_light }) => {
            return (
              <li key={title}>
                <Label
                  name={title}
                  colorCode={color_code}
                  fontLight={font_light}
                />
              </li>
            );
          })}
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
  li {
    padding: 0.3rem;
  }
`;
