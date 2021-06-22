export type NavType = 'All' | 'Milestone' | 'Label';

export type IssueItemLeftPropsType = {
  id: number;
  title: string;
  labeList: LabelItemType[];
  issueNumber: number;
  createdTime: string;
  milestoneTitle: string;
};

export interface IssueItemType extends IssueItemLeftPropsType {
  author: authorType;
}

export type IssuesCountType = { open: number | null; close: number | null };

export type LabelItemType = {
  id: number;
  title: string;
  description: string;
  labelColor: string;
  textColor: 'black' | 'white';
};

export type authorType = {
  name: string;
  profileImg?: string | undefined;
};

export interface LabelsItemLeftProps {
  id: number;
  description: string;
  title: string;
  labelColor: string;
  textColor: 'black' | 'white';
}

export interface LabelsItemProps extends LabelsItemLeftProps {
  id: number;
}

// export interface MilestonesItem extends
export type MilestonesItemLeftProps = {
  title: string;
  description: string;
  dueDate: string;
};

export type MilestoneBarProps = {
  openedIssueCount: number;
  closedIssueCount: number;
};

export type MilestonesItemProps = MilestonesItemLeftProps &
  MilestoneBarProps & {
    id: number;
  };
