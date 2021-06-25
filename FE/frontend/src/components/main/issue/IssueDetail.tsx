import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { filterOptionAtom } from '../../../recoil/atoms';
import NewComment from './NewComment';
import useMutate from '../../../util/useMutate';
import useFetch from '../../../util/useFetch';
import User from '../../../styles/atoms/User';
import Buttons from '../../../styles/atoms/Buttons';
import Modal from '../../../styles/molcules/Modal';
import Typos from '../../../styles/atoms/Typos';
import { ReactComponent as AlertCircle } from '../../../icons/alertCircle.svg';
import { ReactComponent as XSquare } from '../../../icons/xSquare.svg';
import { ReactComponent as Edit } from '../../../icons/edit.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';

const IssueDetail = () => {
  const location = useLocation();
  const { isLoading, data, error, refetch } = useFetch('issue', 'detail', {
    id: location.pathname,
  });
  const filterOptions = useRecoilValue(filterOptionAtom);
  const { mutateAsync: MutateTitle, isSuccess: isEditSuccess } = useMutation(
    useMutate('issue', 'editTitle')
  );

  const { mutateAsync: MutateIntoClosed, isSuccess: isCloseSuccess } =
    useMutation(useMutate('issue', 'close'));

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data?.title);

  const setEditOpen = () => {
    setIsEditOpen(!isEditOpen);
  };

  const editTitle = async (id: number) => {
    await MutateTitle({ data: editedTitle, id: id });

    if (isEditSuccess) {
      refetch();
      setEditOpen();
    }
  };

  return (
    <>
      {data && (
        <LabelListContainer>
          <TopContainer>
            <InfoContainer>
              <TitleContainer>
                {!isEditOpen && (
                  <>
                    <Title>{data.title}</Title> <Id>#{data.id}</Id>
                  </>
                )}
                {isEditOpen && (
                  <>
                    <label htmlFor="editTitle">제목</label>
                    <EditTitle
                      id="editTitle"
                      value={editedTitle}
                      onChange={e => {
                        setEditedTitle(e.target.value);
                      }}></EditTitle>
                  </>
                )}
              </TitleContainer>
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
              <div>
                {!isEditOpen && (
                  <>
                    <Buttons small detail onClick={setEditOpen}>
                      제목 편집
                    </Buttons>
                    <Buttons small detail>
                      이슈 닫기
                    </Buttons>
                    <Buttons small detail>
                      이슈 열기
                    </Buttons>
                  </>
                )}
                {isEditOpen && (
                  <>
                    <Buttons small detail onClick={setEditOpen}>
                      <XSquareWrapper>
                        <XSquare />
                      </XSquareWrapper>
                      편집 취소
                    </Buttons>
                    <Buttons
                      small
                      initial
                      onClick={(e: Event) => {
                        editTitle(data.id);
                      }}>
                      <EditWrapper>
                        <Edit />
                      </EditWrapper>
                      편집 완료
                    </Buttons>
                  </>
                )}
              </div>
            </ButtonContainer>
          </TopContainer>
          <Line />
          <MainContainer>
            <CommentsContainer>
              {data.comments
                .sort((a: any, b: any) => a.id - b.id)
                .reverse()
                .map((comment: any, index: number) => {
                  return (
                    <SingleComment key={index}>
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
              <NewComment issueId={data.id} refetch={refetch} />
            </CommentsContainer>
            <FilterContainer>
              <Modal
                options={filterOptions.assignee}
                exceptedDiv="filterTitle"
                type="image"
                innerTitle="담당자 추가">
                <Text link sm>
                  담당자
                  <Plus />
                </Text>
              </Modal>
              <Modal
                options={filterOptions.label}
                exceptedDiv="filterTitle"
                type="image"
                innerTitle="레이블 추가">
                <Text link sm>
                  레이블
                  <Plus />
                </Text>
              </Modal>
              {/* <Modal
                options={filterOptions.milestone}
                exceptedDiv="filterTitle"
                type="text"
                innerTitle="마일스톤 추가">
                <Text link sm>
                  마일스톤
                  <Plus />
                </Text>
              </Modal> */}
            </FilterContainer>
            {/* <Typos xs>이슈 삭제</Typos> */}
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

const TitleContainer = styled.div`
  position: relative;
  & > label {
    color: ${props => props.theme.greyscale.label};
    position: absolute;
    left: 3%;
    top: 30%;
  }
`;

const Title = styled.span`
  font-size: 32px;
  padding-right: 20px;
  pointer-events: none;
  background: inherit;
  color: ${props => props.theme.greyscale.titleActive};
`;

const EditTitle = styled.input`
  display: flex;
  align-items: center;
  padding-left: 12%;
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.greyscale.titleActive};
  width: 940px;
  height: 40px;
  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 11px;
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
    display: flex;
    margin-left: 10px;
    & > div {
      margin-left: 10px;
    }
  }
`;

const XSquareWrapper = styled.div`
  padding-right: 8px;
  svg {
    stroke: ${props => props.theme.colors.primary};
  }
`;

const EditWrapper = styled.div`
  padding-right: 8px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
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

const FilterContainer = styled.div`
  width: 308px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.greyscale.offWhite};
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
`;

const Text = styled(Typos)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 96px;
  background: ${props => props.theme.greyscale.offWhite};
  color: ${props => props.theme.greyscale.label};
  svg {
    stroke: ${props => props.theme.greyscale.label};
    margin: 2px 0 0 10px;
  }
`;
export default IssueDetail;
