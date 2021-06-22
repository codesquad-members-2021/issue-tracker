import { useMutation } from 'react-query';
import axios from 'axios';
const url = 'http://52.78.35.48/api';

const mutateData = async (type: string, action: string, data?: any) => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };

  switch (type) {
    case 'issue':
      switch (action) {
        case 'add':
          return axios.post(`${url}/issues`, data, axiosConfig);
      }
      return;
    case 'label':
      switch (action) {
        case 'add':
          return axios.post(`${url}/labels`, data, axiosConfig);
      }
      return;
    case 'milestone':
      switch (action) {
      }
      return;
    case 'common':
      switch (action) {
      }
  }
};

export default function useMutate(type: string, action: string, data?: any) {
  return useMutation([type, action], () => mutateData(type, action, data));
}
