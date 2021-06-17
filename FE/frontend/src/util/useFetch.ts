import { useQuery } from 'react-query';
import axios from 'axios';
const url = ' http://13.125.35.62/api';

interface Props {
  id?: string;
  assignee?: string;
  label?: string;
  milstone?: string;
  writer?: string;
}

const getData = async (type: string, action: string, filter?: Props) => {
  switch (type) {
    case 'issue':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${url}/issues`);
          return allData.data.data;
        case 'count':
          const count = await axios.get(`${url}/issues/count`);
          return count.data.data;
        case 'detail':
          const detail = await axios.get(`${url}${filter?.id}`);
          return detail.data.data;
      }
      return;
    case 'label':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${url}/labels`);
          return allData.data.data;
      }
      return;
    case 'milestone':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${url}/milestones`);
          return allData.data.data;
      }
      return;
    case 'common':
      switch (action) {
        case 'count':
          const count = await axios.get(`${url}/count`);
          return count.data.data;
      }
  }
};

export default function useFetch(type: string, action: string, filter?: Props) {
  return useQuery([type, action, filter], () => getData(type, action, filter));
}
