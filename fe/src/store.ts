import axios from 'axios';
import useAxios from 'hook/useAxios';
import { atom, selector } from 'recoil';
import { FilterItemType } from 'types/filterType';
type LabelDataType = {
  id: number;
  title: string;
  description: string;
  color_code: string;
};

type MilestoneDataType = {
  id: number;
  title: string;
  description: string;
  due_date: string;
  opened_issue_count: number;
  closed_issue_count: number;
};

type UserDataType = {
  // 작성자, 담당자 공통
  user_id: number;
  name: string;
  avatar_url: string | undefined;
};

export const totalCountOfLabels = selector<number>({
  key: 'labellength',
  get: ({ get }) => {
    return get(labelQuery).length;
  },
});

export const labelQuery = selector<FilterItemType[]>({
  key: 'labelQuery',
  get: async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/labels`
    );

    return data.map((labelItem: LabelDataType) => ({
      id: labelItem.id,
      description: labelItem.title,
      labelColor: labelItem.color_code,
    }));
  },
});

export const totalCountOfMilestone = selector<number>({
  key: 'milestonelength',
  get: ({ get }) => {
    return get(milestoneQuery).length;
  },
});

export const milestoneQuery = selector<FilterItemType[]>({
  key: 'milestoneQuery',
  get: async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/milestones`
    );
    return data.map((milestoneItem: MilestoneDataType) => ({
      id: milestoneItem.id,
      description: milestoneItem.title,
    }));
  },
});

// export const authorQuery = selector({
//   key: 'authorQuery',
//   get: async () => {
//     const { data } = await axios.get(
//       `${process.env.REACT_APP_API_URL}/api/authors`
//     );

//     return data.map((user: UserDataType) => ({
//       id: user.user_id,
//       description: user.name,
//       imgurl: user.avatar_url,
//     }));
//   },
// });

// export const assigneeQuery = selector({
//   key: 'assigneeQuery',
//   get: async () => {
//     const { data } = await axios.get(
//       `${process.env.REACT_APP_API_URL}/api/assignees`
//     );
//     return data.map((user: UserDataType) => ({
//       id: user.user_id,
//       description: user.name,
//       imgurl: user.avatar_url,
//     }));
//   },
// });

export const filterSelector = selector<TestType>({
  key: 'filterSelector',
  get: ({ get }) => {
    return {
      labelList: get(labelQuery),
      milestoneList: get(milestoneQuery),
      // authorList: get(authorQuery),
      // assigneeList: get(assigneeQuery),
    };
  },
});

type TestType = {
  labelList: FilterItemType[];
  milestoneList: FilterItemType[];
  // authorList: FilterItemType[];
  // assigneeList: FilterItemType[];
};
