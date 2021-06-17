import { Divider } from '@material-ui/core';
import CustomButton from 'components/buttons/CustomButton';
import Header from 'components/header/Header';
import NewIssueLeft from 'components/new-issue/NewIssueLeft';
import NewIssueRight from 'components/new-issue/NewIssueRight';
import styled from 'styled-components';

const NewIssuePage = () => {
  return (
    <StlyedNewIssuePage>
      <Header />
      <NewIssueTitle>새로운 이슈 작성</NewIssueTitle>
      <Divider />
      <NewIssueContent>
        <NewIssueLeft />
        <NewIssueRight />
      </NewIssueContent>
      <Divider />
      <StyledDiv>
      <CustomButton>완료</CustomButton>
      </StyledDiv>
    </StlyedNewIssuePage>
    
  ); 
};

export default NewIssuePage;

const StyledDiv = styled.div`
display: flex;
margin: 1.2rem;
justify-content: flex-end;
`

const StlyedNewIssuePage = styled.div`
  ${({ theme }) => theme.style.flexColum}
`;

const NewIssueTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XXL};
  margin: 2rem;
`;

const NewIssueContent = styled.div`
  display: flex;
  margin: 2rem 0;
`;
