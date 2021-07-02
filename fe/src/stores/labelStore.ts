import axios from 'axios';
import { atom, selector } from 'recoil';
import { parsedLabelData } from 'utils/util';
import { LabelItemType } from 'types/issueType';

export const labelUpdateAtom = atom<number>({
  key: 'labelUpdateAtom',
  default: 0,
});

export const totalCountOfLabels = selector<number>({
  key: 'totalCountOfLabels',
  get: ({ get }) => {
    return get(labelQuery).length;
  },
});

export const labelQuery = selector<LabelItemType[]>({
  key: 'labelQuery',
  get: async ({ get }) => {
    get(labelUpdateAtom);
    const token = localStorage.getItem('jwt');

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/labels`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.map(parsedLabelData);
    } catch (error) {
      console.error('labelQuery 에러', error);
      return [];
    }
  },
  //  set: ({set}, newValue) => set(myAtom, newValue),
});
