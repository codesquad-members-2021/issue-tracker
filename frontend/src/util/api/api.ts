interface APItype {
  getOpenIssue: string;
  tabType: string;
}
interface Tmp {
  [key: string]: string;
}
const basicURL = `http://3.37.76.224/api`;

const API: Tmp = {
  getIssue: basicURL + `/issues?status=`,
  tabType: basicURL + `/issues/form`,
  createIssue: basicURL + `/issues/form`,
};

export default API;
