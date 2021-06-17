import { Box } from '@material-ui/core';
import AuthorAvatar from 'components/common/AuthorAvatar';
import Comment from 'components/issue-detail/Comment';
import styled from 'styled-components';
import CommentTextarea from 'components/common/CommentTextarea';

const IssueDetailBody = () => (
  <Box display="flex">
    <CommentArea>
      <IssueDescription>
        {/* 이슈 작성할 때 본문 부분 - 없으면 생략 가능 */}
        <Comment />
      </IssueDescription>
      <Comments>
        {/* 배열 map 돌려서 Comment 생성하기 */}
        <Comment />
        <Comment />
        <Comment />
      </Comments>
      <NewCommentWrapper display="flex">
        <AuthorAvatar size="L" name="eamon" />
        <Spacer />
        <CommentTextarea />
      </NewCommentWrapper>
    </CommentArea>
    <AssignArea></AssignArea>
  </Box>
);

const CommentArea = styled.section`
  width: 70%;
`;

const IssueDescription = styled.div`
  margin-bottom: 1.5rem;
`;

const Comments = styled.ul`
  all: unset;
  ${({ theme }) => theme.style.flexColum}
  gap: 1.5rem;
`;

const NewCommentWrapper = styled(Box)`
  margin-top: 2.5rem;
`;

const Spacer = styled.div`
  width: 1rem;
`;

const AssignArea = styled.section`
  width: 30%;
  height: 400px;
  margin-left: 2rem;
  background-color: red;
`;
export default IssueDetailBody;
