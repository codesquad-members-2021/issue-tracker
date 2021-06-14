import styled from 'styled-components';
import IssueList from './IssueList';
import IssuesHeader from './IssuesHeader';

const Issues = () => {
  return (
    <StyledIssues>
      <StyledIssuesHeader>
        <IssuesHeader />
      </StyledIssuesHeader>
      <StyledIssuesContent>
        <IssueList />
      </StyledIssuesContent>
    </StyledIssues>
  );
};

export default Issues;

const StyledIssues = styled.div`
  ${({ theme }) => theme.style.flexColum}
  box-sizing: border-box;
`;

const StyledIssuesHeader = styled.div`
  ${({ theme }) => theme.style.upperWrapper}
  width: 100%;
  box-sizing: border-box;
`;

const StyledIssuesContent = styled.div`
  ${({ theme }) => theme.style.lowerWrapper}
  box-sizing: border-box;
`;
