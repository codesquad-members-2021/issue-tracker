import { useQuery } from 'react-query';
import axios from 'axios';

const url = 'https://44c597b3-b68a-4a8a-b608-3fe8108c0210.mock.pstmn.io/api';

const getData = async (type: string, action: string) => {
  switch (type) {
    case 'issue':
      switch (action) {
        case 'getAllData':
          const allData = await axios.get(`${url}/issues`);
          return allData.data.data;
      }
  }
};

export default function useFetch(type: string, action: string) {
  return useQuery([type, action], () => getData(type, action));
}
