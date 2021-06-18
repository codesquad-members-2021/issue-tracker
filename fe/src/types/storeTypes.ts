import { FilterItemType } from './filterType';
import { LabelItemType } from './issueType';

export type LabelDataType = {
  id: number;
  title: string;
  description: string;
  color_code: string;
  text_color: string;
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
