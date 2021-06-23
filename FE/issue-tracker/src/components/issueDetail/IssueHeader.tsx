import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@chakra-ui/react';
import { ReactComponent as EditIcon } from '@assets/edit.svg';
import { ReactComponent as CloseIcon } from '@assets/archive.svg';
import { ReactComponent as AlertIcon } from '@assets/alert.svg';

import { issueDetailList, titleTextContent } from '@store/atoms/issueDetail';
import pipe from '@utils/pipe';
import {
  checkIfDayPassedFromCreation,
  getCreatedTime,
  getRenderingText,
  getTime,
  getTimeGapFromCreation,
  getTotalMinutesBetweenGap,
} from '@utils/renderTimeText';

import type { Param } from '@pages/IssueDetail';
import { issueAPI } from '@const/var';
import { fetchWithAuth } from '@utils/fetchWithAuth';
import IssueDetailTitle from './IssueDetailTitle';

function IssueHeader() {
  const { id }: Param = useParams();
  const history = useHistory();
  const [isEditting, setIsEditting] = useState(false);
  const [titleContents, setTitleContents] = useState<string | null>(null);
  const issueData = useRecoilValue(issueDetailList(id));

  const {
    assignees,
    author_user_id,
    closed,
    created_time,
    description,
    issue_number,
    label_list,
    milestone,
    title,
    num_of_comments,
  } = issueData;

  const currentTime = new Date().getTime();
  const timePassed = pipe(
    getCreatedTime,
    getTimeGapFromCreation(currentTime),
    getTotalMinutesBetweenGap,
    checkIfDayPassedFromCreation,
    getTime,
    getRenderingText
  )(created_time);

  const handleClickIssueClose = () => {
    const closeIssue = async () => {
      const url = `${issueAPI}/${id}`;
      await fetchWithAuth(url, '이슈 상태 변경 오류', {
        method: 'PATCH',
        body: JSON.stringify({ closed: true }),
      });
    };
    closeIssue();
    history.push('/issues');
  };

  const handleClickEditTitle = () => {
    const patchTitle = async () => {
      const url = `${issueAPI}/${id}`;
      await fetchWithAuth(url, '이슈 제목 수정 오류', {
        method: 'PATCH',
        body: JSON.stringify({ title: `${titleContents}` }),
      });
    };

    setIsEditting((state) => !state);
    if (isEditting) patchTitle();
  };

  const issueInfo = `이 이슈가 ${timePassed}에 ${''}님에 의해 열렸습니다 • 코멘트 ${num_of_comments}개`;

  useEffect(() => {
    if (titleContents === null) {
      setTitleContents(title);
    }
  }, [issueData, title, titleContents]);

  return (
    <Header>
      <HeaderLeft>
        <IssueDetailTitle
          title={titleContents}
          setTitleContents={setTitleContents}
          issueNumber={issue_number}
          isEditting={isEditting}
        />
        <IssueInfo>
          {closed ? (
            <CloseIssueTag>
              <CloseIcon className="icon close_icon" /> 닫힌 이슈
            </CloseIssueTag>
          ) : (
            <OpenIssueTag>
              <AlertIcon className="icon alert_icon" /> 열린 이슈
            </OpenIssueTag>
          )}
          <IssueInfoText>{issueInfo}</IssueInfoText>
        </IssueInfo>
      </HeaderLeft>
      <HeaderRight>
        <Button
          onClick={handleClickEditTitle}
          {...whiteButton}
          marginRight="8px"
        >
          <EditIcon className="icon edit_icon" />
          제목 편집
        </Button>
        <Button onClick={handleClickIssueClose} {...whiteButton}>
          <CloseIcon className="icon close_icon" />
          이슈 닫기
        </Button>
      </HeaderRight>
    </Header>
  );
}

export default IssueHeader;

const whiteButton = {
  width: '120px',
  fontSize: 'xs',
  fontWeight: 'medium',
  background: 'white',
  color: 'bl_initial',
  border: '2px solid #007AFF',
};

const Header = styled.section`
  padding: 0 0 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr_line};
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  width: 100%;
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  .icon {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.bl_initial};
    }
  }
`;

const IssueInfo = styled.div`
  display: flex;
  align-items: center;
`;

const OpenIssueTag = styled.div`
  ${({ theme }) => theme.issueTag};
  background-color: ${({ theme }) => theme.colors.bl_light};
  border: 1px solid ${({ theme }) => theme.colors.bl_initial};
  color: ${({ theme }) => theme.colors.bl_initial};
  .alert_icon path {
    stroke: ${({ theme }) => theme.colors.bl_initial};
  }
`;

const CloseIssueTag = styled.div`
  ${({ theme }) => theme.issueTag};
  background-color: ${({ theme }) => theme.colors.pu_light};
  border: 1px solid ${({ theme }) => theme.colors.pu_primary};
  color: ${({ theme }) => theme.colors.pu_primary};
  .close_icon path {
    stroke: ${({ theme }) => theme.colors.pu_primary};
  }
`;

const IssueInfoText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gr_body};
`;
