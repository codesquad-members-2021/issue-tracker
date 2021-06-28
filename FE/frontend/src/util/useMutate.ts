import axios from 'axios';
import URL from './url';

interface Props {
  data?: unknown;
  id?: number;
}

const useMutate =
  (type: string, action: string) =>
  async ({ data, id }: Props) => {
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
            return axios.post(`${URL}/issues`, data, axiosConfig);
          case 'close':
            return axios.post(`${URL}/issues/close`, data, axiosConfig);
          case 'open':
            return axios.post(`${URL}/issues/open`, data, axiosConfig);
          case 'delete':
            return axios.delete(`${URL}/issues/${id}`, axiosConfig);
          case 'editTitle':
            return axios.patch(
              `${URL}/issues/${id}/title`,
              {
                title: data,
              },
              axiosConfig
            );
          case 'editAssignees':
            return axios.patch(
              `${URL}/issues/${id}/assignees`,
              data,
              axiosConfig
            );
          case 'editLabels':
            return axios.patch(`${URL}/issues/${id}/labels`, data, axiosConfig);
          case 'editMilestones':
            return axios.patch(
              `${URL}/issues/${id}/milestones`,
              data,
              axiosConfig
            );
        }
        return;
      case 'label':
        switch (action) {
          case 'add':
            return axios.post(`${URL}/labels`, data, axiosConfig);
          case 'delete':
            return axios.delete(`${URL}/labels/${id}`, axiosConfig);
        }
        return;
      case 'milestone':
        switch (action) {
        }
        return;
      case 'comment':
        switch (action) {
          case 'add':
            return axios.post(
              `${URL}/issues/${id}/comments`,
              data,
              axiosConfig
            );
        }
        return;
      case 'common':
        switch (action) {
        }
    }
  };

export default useMutate;
