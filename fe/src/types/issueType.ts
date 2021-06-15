export interface IssueItemType extends IssueItemLeftPropsType {
  isOpen: boolean;
  author: authorType;
}

export type IssueItemLeftPropsType = {
  title: string;
  labeList: labelType[];
  issueNumber: number;
  createdTime: string;
  milestoneTitle: string;
};

export type labelType = {
  title: string;
  colorCode: string;
  textColor: 'black' | 'white';
};

export type authorType = {
  name: string;
  profileImg?: string | undefined;
};
