import { useQuery } from 'react-query';
import axios from 'axios';

const url = 'https://cd02458d-3bf2-422c-9698-fc320edf4703.mock.pstmn.io/api/';

const getData = async (type: string, action: string) => {
  switch (type) {
    case 'issue':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${url}issues`);
          return allData.data;
      }
  }
};

export default function useFetch(type: string, action: string) {
  return useQuery([type, action], () => getData(type, action));
}
