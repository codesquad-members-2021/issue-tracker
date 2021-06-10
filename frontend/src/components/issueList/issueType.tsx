export interface IssueItemProps {
  issue: IssuesType;
}

export interface IssuesType {
  assignees: string[];
  author: string;
  comment: string;
  commentNumber: number;
  createdDateTime: string;
  id: number;
  labels: LabelProp[];
  milestone: string;
  title: string;
}

export interface LabelProp {
  id: number;
  name: string;
  colorCode: string;
  description: string;
  checked: boolean;
}
