// 1. Header
interface ITextHeader {
  logo: string;
}

const TextHeader: ITextHeader = {
  logo: 'Issue Tracker',
};

// 2. IssueList
export type TNameValue = {
  name: string;
  value: string;
};

export type TIssueListTableHeader =
  | 'search'
  | 'assignee'
  | 'label'
  | 'milestone'
  | 'writer';

interface ITextIssueList {
  filter: {
    caption: string;
    placeHolder: string;
    filterHeader: string;
    filterList: TNameValue[];
  };
  tabs: TNameValue[];

  table: {
    header: {
      left: TNameValue[];
      right: {
        name: TIssueListTableHeader;
        value: string;
      }[]
    };
  };
}

interface ITextLogin {
  github: string;
  id: string;
  placeHolder: {
    id: string;
    password: string;
  };
  or: string;
  register: string;
}

const TextIssueList: ITextIssueList = {
  filter: {
    caption: '필터',
    placeHolder: 'is:issue is:open',
    filterHeader: '이슈 필터',
    filterList: [
      { name: 'open', value: '열린 이슈' },
      { name: 'write', value: '내가 작성한 이슈' },
      { name: 'assign', value: '나에게 할당된 이슈' },
      { name: 'comment', value: '내가 댓글을 남긴 이슈' },
      { name: 'close', value: '닫힌 이슈' },
    ],
  },
  tabs: [
    { name: 'label', value: '레이블' },
    { name: 'milestone', value: '마일스톤' },
    // skip: 버튼 Caption (이슈 작성 )
  ],
  table: {
    header: {
      left: [
        { name: 'open', value: '열린 이슈' },
        { name: 'close', value: '닫힌 이슈' },
      ],
      right: [
        { name: 'assignee', value: '담당자' },
        { name: 'label', value: '레이블' },
        { name: 'milestone', value: '마일스톤' },
        { name: 'writer', value: '작성자' },
      ],
    },
  },
};

// 3. Login

const TextLogin: ITextLogin = {
  github: 'GitHub 계정으로 로그인',
  id: '아이디로 로그인',
  placeHolder: {
    id: '아이디',
    password: '비밀번호',
  },
  or: 'or',
  register: '회원가입',
};

export type { ITextHeader, ITextIssueList, ITextLogin };
export { TextHeader, TextIssueList, TextLogin };
