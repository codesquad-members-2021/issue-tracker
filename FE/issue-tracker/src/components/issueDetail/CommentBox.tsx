import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router';

import { issueDetailComment } from '@store/atoms/issueDetail';
import type { Param } from '@pages/IssueDetail';

import Comment from './Comment';

function CommentBox() {
  const { id }: Param = useParams();
  const issueComments = useRecoilValue(issueDetailComment(id));

  return (
    <div>
      {issueComments.map((commentData: Comments) => {
        return <Comment key={commentData.id} commentData={commentData} />;
      })}
    </div>
  );
}

export default CommentBox;

export type Comments = {
  id: number;
  author: Author;
  created_time: string;
  description: string;
};

export type Author = {
  user_id: number;
  name: string;
  avatar_url: string;
};
