import { Box } from '@material-ui/core';
import AuthorAvatar from 'components/common/AuthorAvatar';
import Comment from 'components/issue-detail/Comment';
import styled from 'styled-components';
import CommentTextarea from 'components/common/CommentTextarea';
import { useRecoilState, useRecoilValue } from 'recoil';
import { clickedIssueIdAtom, decodedUserDataAtom } from 'store';
import { CommentType } from 'types/issueType';
import CreateButton from 'components/buttons/CreateButton';
import { ReactComponent as PlusSvg } from 'icons/plus.svg';
import {
  commentDesctiptionAtom,
  commentsQuery,
  detailIssueAuthorIdAtom,
  issueDetailQuery,
} from 'stores/detailIssueStore';
import axios from 'axios';

const IssueDetailBody = () => {
  const clickedIssueId = useRecoilValue(clickedIssueIdAtom);
  const issueDetailData = useRecoilValue(issueDetailQuery);
  const commentsList = useRecoilValue(commentsQuery); // 코멘트 데이터
  const issueAuthorId = useRecoilValue(detailIssueAuthorIdAtom);
  const loginUser = useRecoilValue(decodedUserDataAtom);
  const [commentDesctiption, setCommentDesctiption] = useRecoilState(
    commentDesctiptionAtom
  );

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

  const newCommentHandler = () => {
    const token = localStorage.getItem('jwt');
    (async function () {
      axios.post(
        `${process.env.REACT_APP_API_URL}/api/issues/${clickedIssueId}/comments`,
        {
          description: commentDesctiption,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    })();
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
          <NewCommentInputArea>
            <AuthorAvatar size="L" profileImg={loginUser?.avatar_url} />
            <Spacer />
            <CommentTextarea
              description={commentDesctiption}
              setDescription={setCommentDesctiption}
            />
          </NewCommentInputArea>

          <NewCommentButtonArea>
            <CreateButton onClick={newCommentHandler} icon={<PlusIcon />}>
              코멘트 작성
            </CreateButton>
          </NewCommentButtonArea>
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
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  width: 1rem;
`;

const NewCommentInputArea = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const NewCommentButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AssignArea = styled.section`
  width: 30%;
  height: 400px;
  margin-left: 2rem;
  background-color: #b1b1b1;
`;

const PlusIcon = styled(PlusSvg)`
  path {
    stroke: ${({ theme }) => theme.color.grayscale.offWhite};
  }
`;

export default IssueDetailBody;
