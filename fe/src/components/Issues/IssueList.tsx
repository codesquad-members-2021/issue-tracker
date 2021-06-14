import styled from 'styled-components';
import { IssueItemType } from 'types/issueType';
import IssueItem from './IssueItem';

export const IssueList = () => {
  const testIssueArray: IssueItemType[] = [
    {
      isOpen: true,
      title: '이슈 제목',
      labeList: [
        { title: '레이블 이름', colorCode: '#4444', textColor: 'white' },
      ],
      issueNumber: 1,
      author: { name: 'eamon', profileImg: undefined },
      createdTime: '2021-06-21 12:11',
      milestoneTitle: '마스터즈 코스',
    },
    {
      isOpen: true,
      title: '이슈 제목',
      labeList: [
        { title: '레이블 이름', colorCode: '#009999f0', textColor: 'black' },
        { title: '레이블 이름', colorCode: '#4444', textColor: 'black' },
      ],
      issueNumber: 2,
      author: { name: 'eamon', profileImg: undefined },
      createdTime: '2021-06-21 12:11',
      milestoneTitle: '마스터즈 코스',
    },
  ];
  return (
    <StyledIssueList>
      {testIssueArray.map((issue, idx) => (
        <IssueItem {...issue} key={idx} />
      ))}
    </StyledIssueList>
  );
};

const StyledIssueList = styled.ul`
  margin: 0;
`;

export default IssueList;
