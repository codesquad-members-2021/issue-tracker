import { LabelDataType, MilestoneDataType, UserDataType } from './storeTypes';

export type NavType = 'All' | 'Milestone' | 'Label';

export type UserType = {
  name: string;
  profileImg?: string | undefined;
  id?: number;
};

export type SidebarListType = 'milestoneList' | 'labelList'  | 'assigneeList';

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

export type IssueDetailType = {
  // IssueDataType과 겹치는 부분이 굉장히 많은데
  // 라벨 부분과 마일스톤 부분이 미묘하게 다르고 id가 없는 등
  // 약간씩 다른 점들이 있어서 일단 타입을 하나 더 만듦
  title: string;
  description: string;
  assignees: UserDataType[];
  isOpened: boolean;
  milestone: MilestoneDataType;
  author: UserDataType;
  createdTime: string;
  issueNumber: number;
  labelList: LabelDataType[];
  commentsCount: number;
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

// =========================== CommentType ===========================

export type CommentType = {
  id: number;
  description: string;
  createdTime: string;
  author: UserType;
};
