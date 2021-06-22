import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router';
import styled from 'styled-components';

import { Avatar, Button } from '@chakra-ui/react';

import { issueDetailComment } from '@store/atoms/issueDetail';
import type { Param } from '@pages/IssueDetail';

import Comment from './Comment';
import CommonTextArea from '@components/common/CommonTextArea';
import { completeButton } from '@components/common/CompleteBtn';

function CommentBox() {
  const { id }: Param = useParams();
  const issueComments = useRecoilValue(issueDetailComment(id));

  return (
    <div>
      {issueComments.map((commentData: Comments) => {
        return <Comment key={commentData.id} commentData={commentData} />;
      })}
      <CommentWrap>
        <AvatarBox>
          <Avatar src={''} />
        </AvatarBox>
        <CommonTextArea />
      </CommentWrap>
      <ButtonBox>
        <Button {...commentButton}>+ 코멘트 작성</Button>
      </ButtonBox>
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

const CommentWrap = styled.div`
  display: flex;
`;

const AvatarBox = styled.div`
  margin-right: 16px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const commentButton = {
  margin: '24px 24px 0 0',
  ...completeButton,
};
