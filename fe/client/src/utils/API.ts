import { IssueCreateType, LabelSendType, MilestoneSendType } from "@components/common/types/APIType";

const API_END_POINT = 'https://issue-tracker-swagger.herokuapp.com';

const API: any = {
  get: {
    issues: async () => {
      return (await fetch(`/issues`)).json();
    },
    issueDetail: async (id: string | number) => {
      return (await fetch(`/issues/${id}`)).json();
    },
    users: async () => {
      return (await fetch(`/users`)).json();
    },
    labels: async () => {
      return (await fetch(`/labels`)).json();
    },
    milestones: async () => {
      return (await fetch(`/milestones`)).json();
    },
    labelsCount: async () => {
      return (await fetch(`/labels-count`)).json();
    },
    milestonesCount: async () => {
      return (await fetch(`/milestones-count`)).json();
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
    },
    labels: async (data: LabelSendType) => {
      const response = await fetch(`/labels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    milestones: async (data: MilestoneSendType) => {
      const response = await fetch(`/milestones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
  },
  put: {
    issues: async (issueId : number, data: IssueCreateType) => {
      const response = await fetch(`/issues/${issueId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return response;
    },
    labels: async (labelId: number, data: LabelSendType) => {
      const response = await fetch(`/labels/${labelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return response;
    },
    milestones: async (milestoneId: number, data: MilestoneSendType) => {
      const response = await fetch(`/milestones/${milestoneId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return response;
    }
  },
  patch: {
    issues: async (patchData: Array<{ id: number, closed: boolean }>) => {
      const response = await fetch(`/issues`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(patchData)
      });
      return response
    }
  }
};

export default API;