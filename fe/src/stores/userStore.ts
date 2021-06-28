import axios from 'axios';
import { atom, selector } from 'recoil';
import { assigneeQueryType } from 'types/filterType';
import { DecodedUserDataType, UserDataType } from 'types/storeTypes';

export const decodedUserDataAtom = atom<DecodedUserDataType | null>({
  key: 'decodedUserDataAtom',
  default: null,
});

export const authorQuery = selector({
  key: 'authorQuery',
  get: async () => {
    const token = localStorage.getItem('jwt');
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/authors`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.map((user: UserDataType) => ({
        id: user.user_id,
        description: user.name,
        imgurl: user.avatar_url,
      }));
    } catch (error) {
      console.error(error, 'author 에러');
      return [];
    }
  },
});

export const assigneeQuery = selector<assigneeQueryType[]>({
  key: 'assigneeQuery',
  get: async () => {
    try {
      const token = localStorage.getItem('jwt');
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/assignees`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.map((user: UserDataType) => ({
        id: user.user_id,
        title: user.name,
        imgurl: user.avatar_url,
      }));
    } catch (error) {
      console.error(error, 'assignee 에러');
      return [];
    }
  },
});
