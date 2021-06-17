import { atom } from "recoil";

export const issueDetailState = atom({
  key: "issueDetailState",
  default: {
    title: "FE 이슈트래커 디자인 시스템 구현",
    number: 1,
    author: {
      id: 1,
      name: "sally",
      image_url: "https://avatars.githubusercontent.com/u/59776016?s=60&v=4",
    },
    created_time: "2021-06-11 14:20",
    is_open: true,
    label: [
      {
        id: 1,
        title: "label1",
        color: "red",
      },
    ],
    assignee: [
      {
        id: 1,
        name: "sally",
        image_url: "https://avatars.githubusercontent.com/u/59776016?s=60&v=4",
      },
    ],
    milestone: {
      id: 1,
      title: "milestone",
      closedIssueCount: 1,
      openedIssueCount: 3,
    },
    comment: [
      {
        id: 1,
        author: {
          id: 1,
          name: "sally",
          image_url:
            "https://avatars.githubusercontent.com/u/59776016?s=60&v=4",
        },
        is_mine: true,
        created_time: "2021-06-08 22:02",
        content: "코멘트에여~~",
      },
      {
        id: 2,
        author: {
          id: 2,
          name: "isaac",
          image_url:
            "https://avatars.githubusercontent.com/u/59776016?s=60&v=4",
        },
        is_mine: false,
        created_time: "2021-06-09 20:02",
        content: "아이작코멘트에여~~",
      },
    ],
  },
});

export const editTitleFlagState = atom({
  key: "editTitleFlagState",
  default: false,
});

export const editCommentBoxState = atom({
  key: "editCommentBoxState",
  default: { isShow: false, id: 0 },
});

export const newCommentState = atom({
  key: "newCommentState",
  default: "",
});
