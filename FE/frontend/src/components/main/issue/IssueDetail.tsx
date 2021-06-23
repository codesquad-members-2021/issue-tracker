import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';
import useFetch from '../../../util/useFetch';
import User from '../../../styles/atoms/User';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as AlertCircle } from '../../../icons/alertCircle.svg';

const IssueDetail = () => {
  const location = useLocation();
  const { isLoading, data, error } = useFetch('issue', 'detail', {
    id: location.pathname,
  });

  return (
    <>
      {data && (
        <LabelListContainer>
          <TopContainer>
            <InfoContainer>
              <div>
                <Title>{data.title}</Title> <Id>#{data.id}</Id>
              </div>
              <LowerTitleContainer>
                <IssueStatus>
                  <AlertCircle />
                  열린 이슈
                </IssueStatus>
                <span>
                  이 이슈가 {moment(data.created_time).fromNow()},
                  {data.writer.username}님에 의해 열렸습니다.
                </span>
                <span>코멘트{data.comments.length}개</span>
              </LowerTitleContainer>
            </InfoContainer>
            <ButtonContainer>
              <Buttons small detail>
                제목 편집
              </Buttons>
              <Buttons small detail>
                이슈 닫기
              </Buttons>
            </ButtonContainer>
          </TopContainer>
          <Line />
          <MainContainer>
            <CommentsContainer>
              {data.comments.map((comment: any, index: number) => {
                return (
                  <SingleComment>
                    <User imageURL={comment.writer.profile_image} />
                    <CommentContainer>
                      <CommentTab>
                        <span>{comment.writer.username}</span>
                        <span>{moment(comment.created_time).fromNow()}</span>
                      </CommentTab>
                      <Comment>{comment.content}</Comment>
                    </CommentContainer>
                  </SingleComment>
                );
              })}
            </CommentsContainer>
            <Assignees></Assignees>
          </MainContainer>
        </LabelListContainer>
      )}
    </>
  );
};
const LabelListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  height: 1px;
  margin: 0 48px;
  background: ${props => props.theme.greyscale.line};
`;

const InfoContainer = styled.div``;

const Title = styled.span`
  font-size: 32px;
  padding-right: 20px;
  pointer-events: none;
  background: inherit;
  color: ${props => props.theme.greyscale.titleActive};
`;

const Id = styled.span`
  font-size: 32px;
  color: ${props => props.theme.greyscale.label};
`;

const LowerTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  & > span {
    padding: 0 12px;
  }
`;

const IssueStatus = styled.div`
  ${props => props.theme.alignCenter}
  padding: 0px 6px;
  width: 100px;
  height: 40px;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.lightBlue};
  border: ${props => `1px solid ${props.theme.colors.primary}`};
  border-radius: 30px;
  svg {
    stroke: ${props => props.theme.colors.primary};
  }
`;

const TopContainer = styled.div`
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  & > div {
    margin-left: 10px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  & > div {
    margin: 0 12px;
  }
`;

const SingleComment = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentContainer = styled.div`
  width: 880px;
  font-size: 16px;
  margin-left: 24px;
  & > div {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
`;

const CommentTab = styled.div`
  height: 64px;
  background: ${props => props.theme.greyscale.background};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 16px 16px 0px 0px;
  & > span {
    padding-right: 20px;
  }
`;

const Comment = styled.div`
  min-height: 60px;
  background: ${props => props.theme.greyscale.offWhite};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 0px 0px 16px 16px;
`;

const Assignees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  width: 308px;
  background: ${props => props.theme.greyscale.offWhite};
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
`;
export default IssueDetail;
