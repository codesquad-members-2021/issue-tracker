import React from 'react'
import MilestoneItem from './MilestoneItem';
import MilestoneEditItem from './MilestoneEditItem';
import useToggle from '@/utils/hook/useToggle';

const MilestoneSwitching = () => {
  const [isEditMilestone, setToggleMilestone] = useToggle(false);

  return (
    <div>
      {isEditMilestone
        ? <MilestoneEditItem {...{ setToggleMilestone }} />
        : <MilestoneItem {...{ setToggleMilestone }} />
      }
    </div>
  )
}

export default MilestoneSwitching;
