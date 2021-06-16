import React from 'react'
import styled from 'styled-components';
import HeadContent from '@components/issueDetail/HeadContent';
import Tabs from '@components/createIssue/Tabs';
import CommentItem from '@components/issueDetail/CommentItem';
import IconButton from '@components/common/IconButton';

const IssueDetailPage = () => {
  return (
    <>
      <HeadContent />
      <FlexWrapper>
        <CommentListWrapper>
          <CommentItem />
          <IconButton variant="contained" color="primary"
            icon='plus' height="40px" margin='16px 0 0 0' background="#007AFF"
            style={{ float: 'right' }}  >
            코멘트 작성
          </IconButton>
        </CommentListWrapper>
        <SideWrapper>
          <Tabs />
          <IconButton icon="trash" color="secondary">
            이슈삭제
          </IconButton>
        </SideWrapper>
      </FlexWrapper>
    </>
  )
}

const FlexWrapper = styled.div`
  display: flex;
`;

const SideWrapper = styled.div`
  display:table;
  text-align: end;
`;

const CommentListWrapper = styled.div`
  width: 100%;
`;

export default IssueDetailPage;
