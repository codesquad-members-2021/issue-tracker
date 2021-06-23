import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { hostAPI, issueAPI } from '@const/var';
import { fetchWithAuth } from '@utils/fetchWithAuth';

const titleTextContent = atom({
  key: 'titleTextContent',
  default: '',
});

const issueDetailList = selectorFamily({
  key: 'issueDetailList',
  get: (id) => async () => {
    try {
      const path = `/${String(id)}`;
      const url = issueAPI + path;
      const res = await fetchWithAuth(url, '이슈 상세 에러', {});
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  },
});

const issueDetailComment = selectorFamily({
  key: 'issueDetailComment',
  get: (id) => async () => {
    try {
      const path = `/${String(id)}/comments`;
      const url = issueAPI + path;
      const res = await fetchWithAuth(url, '이슈 상세 에러', {});
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  },
});

const authorName = selectorFamily({
  key: 'authorName',
  get: (userID) => async () => {
    const ID = String(userID);
    const res = await fetchWithAuth(`${hostAPI}/${ID}`, '작성자 에러', {});
    const { name } = await res.json();
    return name;
  },
});

export { issueDetailList, issueDetailComment, authorName, titleTextContent };
