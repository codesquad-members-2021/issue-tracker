export interface IssueType {
  id: number;
  title: string;
  content: string;
  status: boolean;
  created_at: string;
  label_list: string[];
  author: {
    name: string;
    user_id: string;
  };
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
  [key: string]: string;
}

interface ListItemsType {
  id: number;
  title: string;
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
  openedIssue: IssueType[];
  closedIssue: IssueType[];
}
