import { useRecoilValue } from 'recoil';
import { issuesQuery } from 'stores/issueStore';
import styled from 'styled-components';
import IssueItem from './IssueItem';

export const IssueList = () => {
  const IssuesArray = useRecoilValue(issuesQuery);

  return (
    <StyledIssueList>
      {IssuesArray.map((issue, idx) => (
        <IssueItem {...issue} key={idx} />
      ))}
    </StyledIssueList>
  );
};

const StyledIssueList = styled.ul`
  margin: 0;
`;

export default IssueList;
