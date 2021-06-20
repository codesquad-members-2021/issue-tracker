// https://documenter.getpostman.com/view/8052286/TzY7cDPK

type GetRequestType = 'users' | 'issues' | 'issue' | 'milestones' | 'milestone' | 'labels' | 'label' ;

const END_POINT: string =
  'https://b3c7d639-cf7e-44e4-bc72-e137dced6a20.mock.pstmn.io/';

const createGetRequestAddress = ( type: GetRequestType, arrPaths?: [] ) : string => {
    let result = `${END_POINT}/api/${type}`;
    if (arrPaths && arrPaths.length > 0)
        arrPaths.forEach((path) => result += `/${path}`);

    return result;
}

export { createGetRequestAddress };
