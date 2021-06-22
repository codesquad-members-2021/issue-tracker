export interface ListItemsType {
  id: number | string;
  title: string;
}

interface LabelType extends ListItemsType {
  color: string;
}

export interface IssueType {
  id: number;
  title: string;
  content: string;
  status: boolean;
  created_at: string;
  label_list: LabelType[];
  author: {
    name: string;
    user_id: string;
  };
  assignees: {
    name: string;
    user_id: string;
  }[];
  milestone: {
    milestone_id: number;
    title: string;
  };
}

export interface filterOptionType {
  title: string;
  key: string;
}

export interface UsefulObjectType {
  [key: string]: string | ListItemsType;
}

export interface IssueRefStateType {
  assignee: string;
  author: string;
  milestone: string;
  label: string;
}

export interface IssueRefMenuProps {
  buttonTitle: keyof IssueRefStateType;
  listItems: ListItemsType[];
}

export interface SimpleAppBarProps {
  openIssues: IssueType[];
  closeIssues: IssueType[];
}

export interface EditorRefsType {
  [key: string]: any;
}

export interface TemporalRefStateType {
  assignees: ListItemsType[];
  labels: LabelType[];
  milestones: ListItemsType[];
}
