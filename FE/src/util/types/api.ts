// ** API 관련 Interface & Type 정의

type THistoryFlag = 'open' | 'closed' | 'write' | 'update' | 'delete';
interface IHistory {
  flag: THistoryFlag;
  historyDateTime: Date;
  userName: string;
}

interface ILabel {
  bgColor: string;
  color: string;
  description: string;
  labelId: number;
  title: string;
}

interface IMilestone {
  deadLineDate: Date;
  description: string;
  issueCount: {
    closed: number;
    open: number;
  };
  milestoneId: number;
  title: string;
}

interface IUser {
  userId: number;
  userName: string;
  profileImage: string;
}

interface IIssue {
  contents: string;
  history: IHistory;
  isOpen: boolean;
  issueId: number;
  labels: ILabel[];
  milestone: IMilestone;
  title: string;
}

// -----
interface ILabelsInfo {
  labels: ILabel[];
}

interface IMilestonesInfo {
  milestones: IMilestone[];
}

interface IUsersInfo {
  users: IUser[];
}

interface IIssuesInfo {
  issues: IIssue[];
}

interface IAllGetRequestDatas {
  labels?: ILabelsInfo;
  milestones?: IMilestonesInfo;
  users?: IUsersInfo;
  issues?: IIssuesInfo;
}

export type {
  ILabel, ILabelsInfo,
  IMilestone, IMilestonesInfo,
  IUser, IUsersInfo,
  IIssue, IIssuesInfo,
  IAllGetRequestDatas,
};
