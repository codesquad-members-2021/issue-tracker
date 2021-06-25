import React from 'react'
import MilestoneItem from './MilestoneItem';
import MilestoneEditItem from './MilestoneEditItem';
import { MilestoneSwitchType } from '@components/common/types/MilestoneType';
import useToggle from '@/utils/hook/useToggle';

const MilestoneSwitching = ({ milestoneItem }: MilestoneSwitchType) => {
  const [isEditMilestone, setToggleMilestone] = useToggle(false);

  return (
    <div>
      {isEditMilestone
        ? <MilestoneEditItem {...{ milestoneItem, setToggleMilestone }} />
        : <MilestoneItem {...{ milestoneItem, setToggleMilestone }} />
      }
    </div>
  )
}

export default MilestoneSwitching;
