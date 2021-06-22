export type NavType = 'All' | 'Milestone' | 'Label';

export type UserType = {
  name: string;
  profileImg?: string | undefined;
};

export type SidebarListType = 'milestoneList' | 'labelList';

export type TitleType =
  | 'milestoneList'
  | 'labelList'
  | 'authorList'
  | 'assigneeList';

// =========================== IssueItemType ===========================

export type IssueItemLeftPropsType = {
  id: number;
  title: string;
  labeList: LabelItemType[];
  issueNumber: number;
  createdTime: string;
  milestoneTitle: string;
};

export type IssueItemType = IssueItemLeftPropsType & {
  author: UserType;
};

export type IssuesCountType = { open: number | null; close: number | null };

// =========================== LabelType ===========================

export type LabelType = {
  title: string;
  labelColor: string;
  textColor: 'dark' | 'light';
};

export type LabelItemType = LabelType & {
  id: number;
  description: string;
};

// =========================== MilestoneType ===========================

export type MilestonesItemLeftProps = {
  title: string;
  description: string;
  dueDate: string;
};

export type MilestoneBarType = {
  openedIssueCount: number;
  closedIssueCount: number;
};

export type MilestonesItemProps = MilestonesItemLeftProps &
  MilestoneBarType & {
    id: number;
  };
