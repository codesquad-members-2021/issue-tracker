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

interface ListItemsType {
  id: number;
  title: string;
}

export interface IssueRefMenuProps {
  buttonTitle: string;
  listItems: ListItemsType[];
}

export interface SimpleAppBarProps {
  openedIssue: IssueType[];
  closedIssue: IssueType[];
}
