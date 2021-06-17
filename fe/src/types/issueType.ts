export interface IssueItemType extends IssueItemLeftPropsType {
  isOpen: boolean;
  author: authorType;
}

export type IssueItemLeftPropsType = {
  title: string;
  labeList: labelType[];
  issueNumber: number;
  createdTime: string;
  milestoneTitle: string;
};

export type labelType = {
  title: string;
  colorCode: string;
  textColor: 'black' | 'white';
};

export type authorType = {
  name: string;
  profileImg?: string | undefined;
};

export interface LabelsItemLeftProps {
  description: string;
  title: string;
  colorCode: string;
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
