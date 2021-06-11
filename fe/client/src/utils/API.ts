const API_END_POINT = 'https://issue-tracker-swagger.herokuapp.com';

const API = {
  get: {
    issues: async () => {
      const response = await fetch(`/issues`);
      return response.json();
    }
  }
}

export default API;