import { ParsedQs } from 'qs';
import { NavType } from 'types/issueType';
import { titleType } from 'types/newIssueType';

export const getUrl = {
  LOGIN: (code: string | ParsedQs | string[] | ParsedQs[] | undefined) =>
    `http://15.164.68.136/api/login/auth?client=web&code=${code}`,
};

export const getTitle = (type: titleType) =>
  ({
    milestoneList: '마일스톤',
    labelList: '레이블',
    authorList: '작성자',
    assigneeList: '담당자',
  }[type]);

export const getNavButtonTitle = (type: NavType) =>
  type === 'All' ? '이슈 작성' : '추가';
