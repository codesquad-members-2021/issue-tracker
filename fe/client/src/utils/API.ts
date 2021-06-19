import { IssueCreateType } from "@/components/common/types/APIType";

const API_END_POINT = 'https://issue-tracker-swagger.herokuapp.com';

const API: any = {
  get: {
    issues: async () => {
      const response = await fetch(`/issues`);
      return response.json();
    },
    users: async () => {
      const response = await fetch(`/users`);
      return response.json();
    },
    labels: async () => {
      const response = await fetch(`/labels`);
      return response.json();
    },
    milestones: async () => {
      const response = await fetch(`/milestones`);
      return response.json();
    },
    labelsCount: async () => {
      const response = await fetch(`/labels-count`);
      return response.json();
    },
    milestonesCount: async () => {
      const response = await fetch(`/milestones-count`);
      return response.json();
    },
  },
  post: {
    files: async (formData: FormData) => {
      const response = await fetch(`/files`, { method: 'POST', body: formData });
      return response.json();
    },
    issues: async (data: IssueCreateType) => {
      const response = await fetch(`/issues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }
  }
};

export default API;