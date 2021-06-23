import { ChangeEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router';
import styled from 'styled-components';

import { Avatar, Button, Textarea } from '@chakra-ui/react';
import { ReactComponent as FileIcon } from '@assets/file.svg';
import { issueAPI } from '@const/var';
import { fetchWithAuth } from '@utils/fetchWithAuth';

import { issueDetailComment } from '@store/atoms/issueDetail';
import type { Param } from '@pages/IssueDetail';

import { completeButton } from '@components/common/CompleteBtn';
import { contentsInput } from '@components/newIssue/style';
import Comment from './Comment';
import { useHistory } from 'react-router-dom';

function CommentBox() {
  const { id }: Param = useParams();
  const history = useHistory();
  const [newComment, setNewComment] = useState('');
  const issueComments = useRecoilValue(issueDetailComment(id));

  const handleOnChangeText = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setNewComment(target.value);
  };

  const handleClickCommentUpload = () => {
    console.log(newComment);
    const uploadComment = async () => {
      const url = `${issueAPI}/${id}/comments`;
      await fetchWithAuth(url, '코멘트 업로드 오류', {
        method: 'POST',
        body: JSON.stringify({ description: `${newComment}` }),
      });
    };
    uploadComment();
    window.location.href = `${history.location.pathname}`;
  };

  return (
    <div>
      {issueComments.map((commentData: Comments) => {
        return <Comment key={commentData.id} commentData={commentData} />;
      })}
      <CommentWrap>
        <AvatarBox>
          <Avatar src={''} />
        </AvatarBox>
        <Description>
          <Textarea
            value={newComment}
            onChange={handleOnChangeText}
            {...contentsInput}
          />
          <Span>띄어쓰기 포함 \d\d 자</Span>
          <ImageUploadWrap>
            <FileIcon />
            <span>파일 첨부하기</span>
          </ImageUploadWrap>
        </Description>
      </CommentWrap>
      <ButtonBox>
        <Button onClick={handleClickCommentUpload} {...commentButton}>
          + 코멘트 작성
        </Button>
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

const Description = styled.div`
  width: 880px;
  position: relative;
  background: ${({ theme }) => theme.colors.gr_inputBackground};
  border-radius: ${({ theme }) => theme.radii['2xl']};
`;

const Span = styled.div`
  right: 30px;
  bottom: 72px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.label};
  position: absolute;
`;

const ImageUploadWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 52px;
  color: ${({ theme }) => theme.colors.label};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-top: 1px dotted ${({ theme }) => theme.colors.gr_line};
  cursor: pointer;

  span {
    padding-left: 10px;
  }
`;
