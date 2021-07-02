import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import AuthorAvatar from 'components/common/AuthorAvatar';
import CommentTextarea from 'components/common/CommentTextarea';
import IssueTitleInput from 'components/common/IssueTitleInput';
import Markdown from 'components/common/Markdown';

import { newIssuesContentAtom } from 'stores/issueStore';
import { decodedUserDataAtom } from 'stores/userStore';

const NewIssueLeft = () => {
  const [newIssuesContent, setNewIssuesContent] =
    useRecoilState(newIssuesContentAtom);
  const loginUser = useRecoilValue(decodedUserDataAtom);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewIssuesContent((state) => ({
      ...state,
      description: e.target.value,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIssuesContent((state) => ({
      ...state,
      title: e.target.value,
    }));
  };

  return (
    <StyledNewIssueLeft>
      <NewIssueTitle>
        <AuthorAvatar size="L" profileImg={loginUser?.avatar_url} />
        <IssueTitleInput
          handleChange={handleInputChange}
          value={newIssuesContent.title}
        />
      </NewIssueTitle>
      <StyledCommentInput>
        <CommentTextarea
          value={newIssuesContent.description}
          handleChange={handleChange}
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
