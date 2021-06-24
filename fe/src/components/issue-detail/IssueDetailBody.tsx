import { Box } from '@material-ui/core';
import AuthorAvatar from 'components/common/AuthorAvatar';
import Comment from 'components/issue-detail/Comment';
import styled from 'styled-components';
import CommentTextarea from 'components/common/CommentTextarea';
import { useRecoilValue } from 'recoil';
import {
  commentsQuery,
  decodedUserDataAtom,
  detailIssueAuthorIdAtom,
  issueDetailQuery,
} from 'store';
import { CommentType } from 'types/issueType';

const IssueDetailBody = () => {
  const issueDetailData = useRecoilValue(issueDetailQuery);
  const commentsList = useRecoilValue(commentsQuery); // 코멘트 데이터
  const issueAuthorId = useRecoilValue(detailIssueAuthorIdAtom);
  const loginUser = useRecoilValue(decodedUserDataAtom);

  const issueDescription = {
    // 코멘트처럼 생겼지만 사실 이슈의 본문
    id: issueAuthorId,
    author: {
      name: issueDetailData.author.name,
      profileImg: issueDetailData.author.avatar_url,
      id: issueDetailData.author.user_id,
    },
    description: issueDetailData.description,
    createdTime: issueDetailData.createdTime,
  };

  return (
    <Box display="flex">
      <CommentArea>
        <IssueDescription>
          {/* 이슈 작성할 때 본문 부분 - 없으면 생략 가능 */}
          {issueDetailData.description && (
            <Comment commentData={issueDescription} />
          )}
        </IssueDescription>
        <Comments>
          {commentsList &&
            commentsList.map((commentData: CommentType) => (
              <Comment key={commentData.id} commentData={commentData} />
            ))}
        </Comments>
        <NewCommentWrapper display="flex">
          <AuthorAvatar size="L" profileImg={loginUser?.avatar_url} />
          <Spacer />
          <CommentTextarea />
        </NewCommentWrapper>
      </CommentArea>
      <AssignArea></AssignArea>
    </Box>
  );
};

const CommentArea = styled.section`
  width: 70%;
`;

const IssueDescription = styled.div`
  margin-bottom: 1.5rem;
`;

const Comments = styled.ul`
  all: unset;
  ${({ theme }) => theme.style.flexColumn}
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
