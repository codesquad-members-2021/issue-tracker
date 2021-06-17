import AuthorAvatar from 'components/common/AuthorAvatar';
import CommentTextarea from 'components/common/CommentTextarea';
import IssueTitleInput from 'components/common/IssueTitleInput';
import styled from 'styled-components';

const NewIssueLeft = () => {
  return (
    <StyledNewIssueLeft>
      <NewIssueTitle>
        <AuthorAvatar size="L" name="eamon" />
        <IssueTitleInput />
      </NewIssueTitle>
      <StyledCommentInput>
        <CommentTextarea />
      </StyledCommentInput>
    </StyledNewIssueLeft>
  );
};

export default NewIssueLeft;

const StyledCommentInput = styled.div`
  padding-top: 2rem;
  padding-left: 3.6rem;
`;
const StyledNewIssueLeft = styled.div`
  ${({ theme }) => theme.style.flexColum}
  width: 75%;
`;

const NewIssueTitle = styled.div`
  display: flex;
`;
