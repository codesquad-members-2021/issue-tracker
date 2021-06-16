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
  labels: {
    labels: [
      {
        id: number,
        name: string,
        description: string,
        color: string
      }
    ]
  },
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
}