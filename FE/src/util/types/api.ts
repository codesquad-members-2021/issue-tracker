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

// ----

interface IIssueInfo {
  contents: string;
  history: IHistory;
  isOpen: boolean;
  issueId: number;
  labels: ILabel[];
  milestone: IMilestone;
  title: string;
}

interface IIssuesInfo {
  issues: IIssueInfo[];
}

interface ILabelsInfo {
  labels: ILabel[];
}

interface IMilestonesInfo {
  milestones:  IMilestone[];
}

interface IIssuesPageData {
  issues?: IIssuesInfo,
  milestones?: IMilestonesInfo,
  labels?: ILabelsInfo,
}

export type { IIssueInfo, IIssuesInfo, ILabelsInfo, IMilestonesInfo, IIssuesPageData };
