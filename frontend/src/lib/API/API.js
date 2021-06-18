// useFetch 커스텀훅으로 수정예정

const END_POINT = "http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api"

const TOKEN = JSON.parse(localStorage.getItem("issue-tracker-user"));

const headerMaker = ({token}) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
  }
}

const API = {
  get: {
    issues: async (query) => {
      let targetURL = `${END_POINT}/issues`;
      if (query) targetURL += `?searchFilter=${query}`;
      return await fetch(targetURL, {...headerMaker({token: TOKEN.accessToken})}).then((response) => {
        return response.json();
      });
      // console.log("API call", result);
    }
  },
  post: {},
  patch: {},
  put: {},
  delete: {}
}

export default API;