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

type TFilterModal = 'search' | 'assignee' | 'label' | 'milestone' | 'writer';
type TFilterItemType = 'color' | 'image' | 'text';

interface ITextIssueList {
  filter: {
    caption: string;
    placeHolder: string;
  };
  tabs: TNameValue[];

  table: {
    header: {
      left: TNameValue[];
      right: {
        name: TFilterModal;
        value: string;
      }[];
    };
  };
}

export type TIssueListFilterType = {
  title: string;
  items: {
    name: string;
    text?: string;
    imgType?: TFilterItemType;
    imgUrl?: string;
    color?: string;
  }[];
};

type TTextIssueListFilterItems = {
  [filterType in TFilterModal]: TIssueListFilterType;
};

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

const TextIssueListFilterMock: TTextIssueListFilterItems = {
  search: {
    title: '이슈 필터',
    items: [
      { name: 'open', text: '열린 이슈' },
      { name: 'write', text: '내가 작성한 이슈' },
      { name: 'assign', text: '나에게 할당된 이슈' },
      { name: 'comment', text: '내가 댓글을 남긴 이슈' },
      { name: 'close', text: '닫힌 이슈' },
    ],
  },
  assignee: {
    title: '담당자 필터',
    items: [
      { name: 'noAssignee', text: '담당자가 없는 이슈' },
      {
        name: 'Oni',
        text: 'Oni',
        imgUrl: 'https://avatars.githubusercontent.com/u/33610315?s=60&v=4',
        imgType: 'image',
      },
      {
        name: 'Daniel',
        text: 'Daniel',
        imgUrl: 'https://avatars.githubusercontent.com/u/33610315?s=60&v=4',
        imgType: 'image',
      },
    ],
  },
  label: {
    title: '레이블 필터',
    items: [
      { name: 'noLabel', text: '레이블이 없는 이슈' },
      { name: 'bug', text: 'bug', color: 'red', imgType: 'color', },
      { name: 'documentation', text: 'documentation', color: 'blue', imgType: 'color', },
    ],
  },
  milestone: {
    title: '마일스톤 필터',
    items: [
      { name: 'noMilestone', text: '마일스톤이 없는 필터' },
      { name: 'masters', text: '마스터즈 코스' },
    ],
  },
  writer: {
    title: '작성자 필터',
    items: [
      {
        name: 'Oni',
        text: 'Oni',
        imgUrl: 'https://avatars.githubusercontent.com/u/33610315?s=60&v=4',
        imgType: 'image',
      },
      {
        name: 'Daniel',
        text: 'Daniel',
        imgUrl: 'https://avatars.githubusercontent.com/u/33610315?s=60&v=4',
        imgType: 'image',
      },
    ],
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
export { TextHeader, TextIssueList, TextLogin, TextIssueListFilterMock };
