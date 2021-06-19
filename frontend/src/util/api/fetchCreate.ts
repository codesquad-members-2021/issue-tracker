import API from 'util/api/api';

type inputsType = {
  title?: string;
  comment: string;
  assignees: number[] | []; //일단이렇게
  labels: number[] | []; //일단이렇게
  milestone: number | null; //일단이렇게
};

export default async function fetchCreate(issueInputs: inputsType) {
  try {
    const response = await fetch(API.createIssue, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcImlzc3VlLXRyYWNrZXItdGVhbS0wNlwiIiwidXNlcklkIjoxfQ.WCMSnjyZCjZ80aSBN9GCNckS8Q_FkdpWXPWJwsx3kVA',
      },
      body: JSON.stringify(issueInputs),
    });
    console.log('try')
    if (response.status !== 200) throw new Error('잘못된 요청입니다.');
    const issueID = response.json();
    return issueID;
  } catch (err) {
    throw new Error('잘못된 요청입니다.');
  }
}
