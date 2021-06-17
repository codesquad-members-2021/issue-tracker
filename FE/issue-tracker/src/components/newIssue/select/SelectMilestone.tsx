import { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, Button, Progress } from '@chakra-ui/react';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import { menuBtnStyle } from '@styles/chakraStyle';
import { progressBar } from '../style';
import MilestoneModal from './MilestoneModal';
import { fetchModal } from '@utils/fetchModal';

function SelectMilestone() {
  const [milestones, setMilestones] = useState(null);

  const handleClickMilestone = () => {
    fetchModal({ path: 'milestones', setState: setMilestones });
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
          onClick={handleClickMilestone}
        >
          마일스톤
        </MenuButton>
        <MilestoneModal milestones={milestones} />
      </Menu>
      <AddList>
        <li>
          <Progress {...progressBar} value={32} />
          <span>마스터즈 코스</span>
        </li>
      </AddList>
    </Wrap>
  );
}

export default SelectMilestone;

const Wrap = styled.div`
  padding: 34px 32px 32px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr_line};
`;

const AddList = styled.ul`
  padding: 8px 0;

  span {
    color: ${({ theme }) => theme.colors.gr_label};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
