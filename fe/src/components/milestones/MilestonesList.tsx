import { useRecoilValue } from 'recoil';
import {
  closedMilestoneQuery,
  openedMilestoneQuery,
} from 'stores/milestoneStore';
import MilestonesItem from 'components/milestones/MilestonesItem';

const MilestonesList = ({ isOpenedMilestoneTab }: any) => {
  const openedMilestones = useRecoilValue(openedMilestoneQuery);
  const closedMilestones = useRecoilValue(closedMilestoneQuery);

  return (
    <ul>
      {isOpenedMilestoneTab
        ? openedMilestones.map((milestoneItem) => (
            <MilestonesItem
              key={milestoneItem.id}
              id={milestoneItem.id}
              title={milestoneItem.title}
              description={milestoneItem.description}
              dueDate={milestoneItem.dueDate}
              openedIssueCount={milestoneItem.openedIssueCount}
              closedIssueCount={milestoneItem.closedIssueCount}
            />
          ))
        : closedMilestones.map((milestoneItem) => (
            <MilestonesItem
              key={milestoneItem.id}
              id={milestoneItem.id}
              title={milestoneItem.title}
              description={milestoneItem.description}
              dueDate={milestoneItem.dueDate}
              openedIssueCount={milestoneItem.openedIssueCount}
              closedIssueCount={milestoneItem.closedIssueCount}
            />
          ))}
    </ul>
  );
};

export default MilestonesList;
