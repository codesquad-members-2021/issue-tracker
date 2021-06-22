export interface UserType {
  id: number;
  userName: string;
  assigned: boolean;
  image: string;
}
export interface LabelType {
  id: number;
  name: string;
  description: string;
  checked: boolean;
  color: {
    backgroundColorCode: string;
    textColorCode: string;
  };
}

export interface MilestoneType {
  id: number;
  title: string;
  description: string;
  createdDateTime: string;
  dueDate: string;
  openedIssueCount: number;
  closedIssueCount: number;
  checked?: boolean;
}

export interface CommentType {
  id: number;
  userName: string;
  comment: string;
  createdDateTime: string;
  author: boolean;
  owner: boolean;
}
