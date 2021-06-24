import { ParsedQs } from 'qs';
import { NavType } from 'types/issueType';
import { TitleType } from 'types/issueType';

export const getUrl = {
  LOGIN: (code: string | ParsedQs | string[] | ParsedQs[] | undefined) =>
    `http://15.164.68.136/api/login/auth?client=web&code=${code}`,
};

export const getTitle = (type: TitleType) =>
  ({
    milestoneList: '마일스톤',
    labelList: '레이블',
    authorList: '작성자',
    assigneeList: '담당자',
  }[type]);

export const getNavButtonTitle = (type: NavType) =>
  type === 'All' ? '이슈 작성' : '추가';

export const labelParser = (str: string | null) => {
  switch (str) {
    case '레이블 이름':
      return 'Title';
    case '설명(선택)':
      return 'Description';
    case '배경색상':
      return 'LabelColor';
    default:
      return 'TextColor';
  }
};



export const milestoneParser = (str: string | null) => {
  switch (str) {
    case '제목':
      return 'Title';
    case '설명(선택)':
      return 'Description';
    default:
      return 'DueDate';
  }
};