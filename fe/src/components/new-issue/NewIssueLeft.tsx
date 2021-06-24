import AuthorAvatar from 'components/common/AuthorAvatar';
import CommentTextarea from 'components/common/CommentTextarea';
import IssueTitleInput from 'components/common/IssueTitleInput';
import { useRecoilState } from 'recoil';
import { newIssueDescriptionAtom } from 'store';
import styled from 'styled-components';

const NewIssueLeft = () => {
  const [newIssueDescription, setNewIssueDescription] = useRecoilState(
    newIssueDescriptionAtom
  );

  return (
    <StyledNewIssueLeft>
      <NewIssueTitle>
        <AuthorAvatar size="L" />
        <IssueTitleInput />
      </NewIssueTitle>
      <StyledCommentInput>
        <CommentTextarea
          description={newIssueDescription}
          setDescription={setNewIssueDescription}
        />
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
  ${({ theme }) => theme.style.flexColumn}
  width: 75%;
`;

const NewIssueTitle = styled.div`
  display: flex;
`;
