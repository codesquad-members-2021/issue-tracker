import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeadContent from '@components/issueDetail/HeadContent';
import Tabs from '@components/createIssue/Tabs';
import IconButton from '@components/common/IconButton';
import CommentSwitch from '@components/issueDetail/CommentSwitch';
import CommentCreate from '@components/issueDetail/CommentCreate';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';
import API from '@/utils/API';

const IssueDetailPage = () => {
  const params = useParams<{ id: string }>();
  const [issueDetailItem] = useFetch(API.get.issueDetail, false, params.id);
  const { data, loading, error }: AsyncState<any, any> = issueDetailItem;

  const handleClickTitleChange = useCallback(({
    title = data.title,
    mainCommentContents = data.mainCommentContents,
    authorId = data.author.id,
    assigneeIds = data.assignees.map(({ id }: { id: number }) => id),
    labelIds = data.labels.map(({ id }: { id: number }) => id),
    milestoneId = data.milestone.id
  }) => async () => {
    const putData = {
      title, mainCommentContents, authorId, assigneeIds, labelIds, milestoneId
    }
    const responseData = await API.put.issues(data.id, putData)
  }, [data])

  return (
    <>
      {data && <>
        <HeadContent
          issueNumber={data.number}
          id={data.id}
          title={data.title}
          closed={data.closed}
          {...{ handleClickTitleChange }} />
        <FlexWrapper>
          <CommentListWrapper>

            <CommentSwitch comments={data.mainComment} isWriter />
            <CommentSwitch comments={data.mainComment} isWriter />
            {data.comment && data.comment.map((comments: any) => {
              return <CommentSwitch {...{ comments }} isWriter />
            })}
            <CommentCreate />
          </CommentListWrapper>
          <SideWrapper>
            <Tabs checkedData={data} />
            <IconButton icon="trash" color="secondary">
              이슈삭제
            </IconButton>
          </SideWrapper>
        </FlexWrapper>
      </>}
      {loading && <>loading...</>}
      {error && <>error...</>}
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
