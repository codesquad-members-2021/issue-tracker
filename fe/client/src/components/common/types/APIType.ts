export type IssueListItemType = {
  id: number;
  number: number;
  title: string;
  description: string;
  hasSameAuthorComments: boolean;
  createDateTime: string;
  author: {
    id: number;
    email: string;
    name: string;
  };
  assignees: [
    {
      id: number,
      email: string,
      name: string
    }
  ],
  labels: [
    {
      id: number,
      name: string,
      description: string,
      color: string
    }
  ],
  milestone: {
    id: number,
    name: string,
    description: string,
    dueDate: string,
    openedIssueCount: number,
    closedIssueCount: number,
    closed: boolean
  },
  closed: boolean
  [key: string]: any;
};


export type IssueCreateType = {
  title: string;
  mainCommentContents: string;
  authorId: number;
  assigneeIds: Array<string>;
  labelIds: Array<string>;
  milestoneId: number;
}


export type LabelSendType = {
  name: string;
  description: string;
  color: string;
}

export type MilestoneSendType = {
  name: string;
  description: string;
  dueDate: string;
  closed: boolean;
}