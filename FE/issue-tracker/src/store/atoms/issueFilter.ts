import { atom } from 'recoil';

const milestoneFilterList = atom({
  key: 'milestoneFilterList',
  default: {
    query: 'milestones',
    data: [],
    cachingTime: 0,
  },
});

const labelFilterList = atom({
  key: 'labelFilterList',
  default: {
    query: 'labels',
    data: [],
    cachingTime: 0,
  },
});

const assigneeFilterList = atom({
  key: 'assigneeFilterList',
  default: {
    query: 'assignees',
    data: [],
    cachingTime: 0,
  },
});

const authorFilterList = atom({
  key: 'authorFilterList',
  default: {
    query: 'authors',
    data: [],
    cachingTime: 0,
  },
});

export {
  milestoneFilterList,
  labelFilterList,
  assigneeFilterList,
  authorFilterList,
};
