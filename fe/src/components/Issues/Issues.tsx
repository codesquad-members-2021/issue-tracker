import styled from 'styled-components';
import IssuesHeader from './IssuesHeader';

const Issues = () => {
  return (
    <StyledIssues>
      <StyledIssuesHeader>
        <IssuesHeader/>
      </StyledIssuesHeader>
      <StyledIssuesContent></StyledIssuesContent>
    </StyledIssues>
  );
};

export default Issues;

const StyledIssues = styled.div`
  ${({theme})=> theme.style.flexColum }
`;

const StyledIssuesHeader = styled.div`
${({theme})=> theme.style.upperWrapper}
`

const StyledIssuesContent = styled.div`
${({theme})=> theme.style.lowerWrapper}
`