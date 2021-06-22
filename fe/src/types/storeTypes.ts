import { FilterItemType } from './filterType';
import { LabelItemType } from './issueType';

export type DecodedUserDataType = {
  avatar_url: string;
  name: string;
  id: number;
};

export type IssueDataType = {
  id: number;
  title: string;
  description: string;
  assignee: UserDataType[];
  author: UserDataType;
  label_list: LabelDataType[];
  issue_number: number;
  created_time: string;
  milestone_title: string;
};

export type LabelDataType = {
  id: number;
  title: string;
  description: string;
  color_code: string;
  font_light: boolean;
};

export type MilestoneDataType = {
  id: number;
  title: string;
  description: string;
  due_date: string;
  opened_issue_count: number;
  closed_issue_count: number;
};

export type UserDataType = {
  // 작성자, 담당자 공통
  user_id: number;
  name: string;
  avatar_url: string | undefined;
};

export type TestType = {
  labelList: LabelItemType[];
  milestoneList: FilterItemType[];
  authorList: FilterItemType[];
  assigneeList: FilterItemType[];
};
