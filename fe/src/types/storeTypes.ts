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

export type IssueDetailDataType = {
  // IssueDataType과 겹치는 부분이 굉장히 많은데
  // 라벨 부분과 마일스톤 부분이 미묘하게 다르고 id가 없는 등
  // 약간씩 다른 점들이 있어서 일단 타입을 하나 더 만듦
  title: string;
  description: string;
  assignees: UserDataType[];
  closed: boolean;
  milestone: MilestoneDataType;
  author: UserDataType;
  created_time: string;
  issue_number: number;
  label_list: LabelDataType[];
  num_of_comments: number;
};

export type CommentDataType = {
  id: number;
  description: string;
  created_time: string;
  author: UserDataType;
};

export type LabelDataType = {
  id?: number;
  title: string;
  description?: string;
  color_code: string;
  font_light: boolean;
};

export type MilestoneDataType = {
  id?: number;
  title: string;
  description?: string;
  due_date?: string;
  opened_issue_count: number;
  closed_issue_count: number;
};

export type UserDataType = {
  // 작성자, 담당자 공통
  id?: number;
  user_id: number;
  name: string;
  avatar_url: string | undefined;
};

export type filterSelectorType = {
  labelList: LabelItemType[];
  milestoneList: FilterItemType[];
  authorList: FilterItemType[];
  assigneeList: FilterItemType[];
};
