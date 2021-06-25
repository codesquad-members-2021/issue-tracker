import { useQuery } from 'react-query';
import axios from 'axios';
import URL from './url';

interface Props {
  id?: string;
  isOpen?: boolean | string;
  specialFilter?: string;
  assignee?: string;
  label?: string;
  milstone?: string;
  writer?: string;
}

const getData = async (type: string, action: string, filter?: Props) => {
  const axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };

  switch (type) {
    case 'user':
      switch (action) {
        case 'image':
          const userData = await axios.get(`${URL}/user`, axiosConfig);
          return userData.data.data;
      }
      return;
    case 'issue':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${URL}/issues`);
          return allData.data.data;
        case 'count':
          const count = await axios.get(`${URL}/issues/count`);
          return count.data.data;
        case 'detail':
          const detail = await axios.get(`${URL}${filter?.id}`);
          return detail.data.data;
        case 'filter':
          const filteredData = await axios.get(
            `${URL}/issues?is_open=${filter?.isOpen}&filter=${filter?.specialFilter}&assignee=${filter?.assignee}&label=${filter?.label}&milestone=${filter?.milstone}&writer=${filter?.writer}`,
            axiosConfig
          );
          return filteredData.data.data;
      }
      return;
    case 'label':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${URL}/labels`);
          return allData.data.data;
      }
      return;
    case 'milestone':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${URL}/milestones`);
          return allData.data.data;
      }
      return;
    case 'common':
      switch (action) {
        case 'count':
          const count = await axios.get(`${URL}/common/count`);
          return count.data.data;
      }
  }
};

export default function useFetch(type: string, action: string, filter?: Props) {
  return useQuery([type, action, filter?.id], () =>
    getData(type, action, filter)
  );
}
