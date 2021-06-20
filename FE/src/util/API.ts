// https://documenter.getpostman.com/view/8052286/TzY7cDPK

type TGetRequestTypes = 'users' | 'issues' | 'issue' | 'milestones' | 'milestone' | 'labels' | 'label' ;
type TGetRequestRequiredPaths = { [type in TGetRequestTypes]: boolean };

const getRequestRequiredPaths: TGetRequestRequiredPaths = {
  users: false,
  issues: false,
  issue: true,  // id
  milestones: false,
  milestone: true,  // id
  labels: false,
  label: true,  // id
};

const END_POINT: string =
  'https://b3c7d639-cf7e-44e4-bc72-e137dced6a20.mock.pstmn.io/';

const createGetRequestAddress = (
  type: TGetRequestTypes,
  strPath: string = '',
): string => {
  try {
    let result = `${END_POINT}/api/${type}`;
    if (getRequestRequiredPaths[type] && !strPath)
      throw new Error('Error: Please enter an additional url path..');
    else result += strPath;
    return result;
  } catch (e) {
    console.error(e.message);
    return '';
  }
};

export { createGetRequestAddress };
