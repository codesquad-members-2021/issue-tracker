import { Wrapper, Upper, Lower } from 'components/common/Table';
import { ReactComponent as Open } from 'icons/openIssue.svg';
import { ReactComponent as Close } from 'icons/closeIssue.svg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import {
  countOfClosedMilestone,
  countOfOpenedMilestone,
} from 'stores/milestoneStore';
import { useState } from 'react';
import MilestonesList from './MilestonesList';

const Milestones = () => {
  const openedMilestoneCnt = useRecoilValue(countOfOpenedMilestone);
  const closedMilestoneCnt = useRecoilValue(countOfClosedMilestone);
  const [isOpenedMilestoneTab, setIsOpenedMilestoneTab] =
    useState<boolean>(true);

  const handleClickOpenedMilestone = () => {
    setIsOpenedMilestoneTab(true);
  };

  const handleClickClosedMilestone = () => {
    setIsOpenedMilestoneTab(false);
  };

  return (
    <Wrapper>
      <Upper>
        <MilestonesHeader>
          <MilestonesButton
            startIcon={<OpenSvg />}
            onClick={handleClickOpenedMilestone}
          >
            열린 마일스톤({openedMilestoneCnt})
          </MilestonesButton>
          <MilestonesButton
            startIcon={<CloseSvg />}
            onClick={handleClickClosedMilestone}
          >
            닫힌 마일스톤({closedMilestoneCnt})
          </MilestonesButton>
        </MilestonesHeader>
      </Upper>
      <Lower>
        <MilestonesList isOpenedMilestoneTab={isOpenedMilestoneTab} />
      </Lower>
    </Wrapper>
  );
};

export default Milestones;

const MilestonesHeader = styled.div`
  padding: 1rem;
`;

const MilestonesButton = styled(Button)`
  color: ${({ theme }) => theme.color.grayscale.titleActive};
  stroke: ${({ theme }) => theme.color.grayscale.titleActive};
  font-weight: 700;
`;
const OpenSvg = styled(Open)`
  path {
    stroke: inherit;
  }
`;
const CloseSvg = styled(Close)`
  path {
    stroke: inherit;
  }
`;
