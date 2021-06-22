import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@chakra-ui/react';
import { ReactComponent as EditIcon } from '@assets/edit.svg';
import { ReactComponent as CloseIcon } from '@assets/archive.svg';
import { ReactComponent as AlertIcon } from '@assets/alert.svg';

import { issueDetailComment, issueDetailList } from '@store/atoms/issueDetail';
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

function IssueHeader() {
  const { id }: Param = useParams();
  const issueData = useRecoilValue(issueDetailList(id));

  const {
    assignee,
    author_user_id,
    closed,
    created_time,
    description,
    issue_number,
    label_list,
    milestone,
    title,
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

  const issueInfo = `이 이슈가 ${timePassed}에 ${''}님에 의해 열렸습니다 • 코멘트 1개`;

  return (
    <Header>
      <HeaderLeft>
        <TitleBox>
          <h1>{title}</h1>
          <span>#{issue_number}</span>
        </TitleBox>
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
        <Button {...whiteButton} marginRight="8px">
          <EditIcon className="icon edit_icon" />
          제목 편집
        </Button>
        <Button {...whiteButton}>
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

const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  .icon {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.bl_initial};
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 16px;
  h1 {
    color: ${({ theme }) => theme.colors.gr_titleActive};
    margin-right: 16px;
  }
  span {
    color: ${({ theme }) => theme.colors.gr_label};
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
