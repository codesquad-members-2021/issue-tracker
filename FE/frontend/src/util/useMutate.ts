import axios from 'axios';
const url = 'http://52.78.35.48/api';

interface Props {
  data: unknown;
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
            return axios.post(`${url}/issues`, data, axiosConfig);
          case 'close':
            return axios.post(`${url}/issues/close`, data, axiosConfig);
          case 'open':
            return axios.post(`${url}/issues/open`, data, axiosConfig);
          case 'delete':
            return axios.delete(`${url}/issues/${id}`, axiosConfig);
          case 'editTitle':
            return axios.patch(
              `${url}/issues/${id}/title`,
              {
                title: data,
              },
              axiosConfig
            );
          case 'editAssignees':
            return axios.patch(
              `${url}/issues/${id}/assignees`,
              data,
              axiosConfig
            );
          case 'editLabels':
            return axios.patch(`${url}/issues/${id}/labels`, data, axiosConfig);
          case 'editMilestones':
            return axios.patch(
              `${url}/issues/${id}/milestones`,
              data,
              axiosConfig
            );
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

export default useMutate;
