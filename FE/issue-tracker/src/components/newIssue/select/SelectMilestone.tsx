import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Menu, MenuButton, Button, Progress } from '@chakra-ui/react';

import { ReactComponent as PlusIcon } from '@assets/plus.svg';
import { menuBtnStyle } from '@styles/chakraStyle';
import { progressBar } from '../style';
import MilestoneModal from './MilestoneModal';
import { fetchModal } from '@utils/fetchModal';
import { checkedMilestoneState } from '@store/atoms/checkedThings';

type progressValueType = {
  progress: number;
  title: string;
};

function SelectMilestone() {
  const [milestones, setMilestones] = useState(null);
  const [errorMsg, setErrorMsg] = useState('No Error');
  const checkedMilestones = useRecoilValue(checkedMilestoneState);
  const [progressValue, setProgressValue] =
    useState<progressValueType | null>(null);

  useEffect(() => {
    if (checkedMilestones == null) setProgressValue(null);
    else {
      const { opened_issue_count, closed_issue_count, title } =
        checkedMilestones;
      const total = opened_issue_count + closed_issue_count;
      const progress = (closed_issue_count / total) * 100;
      setProgressValue({ progress, title });
    }
  }, [checkedMilestones]);

  const handleClickMilestone = () => {
    fetchModal({
      path: 'milestones',
      setState: setMilestones,
      setErrorMsg: setErrorMsg,
    });
  };

  return (
    <Wrap>
      <Menu closeOnSelect={true}>
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
        <MilestoneModal milestones={milestones} errorMsg={errorMsg} />
      </Menu>
      <AddList>
        {progressValue !== null && (
          <li>
            <Progress {...progressBar} value={progressValue.progress} />
            <span>{progressValue.title}</span>
          </li>
        )}
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
